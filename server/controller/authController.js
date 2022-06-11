const { User, ArtifactSocialInfo } = require("../models/User");
const jwt = require("jsonwebtoken");
const cheerio = require("cheerio");
const cloudinary = require("cloudinary");
const rp = require("request-promise");
const bcrypt = require("bcrypt");
const createToken = (id) => {
  return jwt.sign({ id }, "SECRET_KEY", {
    expiresIn: 60 * 60 * 24 * 3,
  });
};
cloudinary.config({
  cloud_name: "iiitm-gwalior",
  api_key: "755879114919117",
  api_secret: "EEg7l_-FagG6vT2AxVXMS4BIjUY",
});

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name: name, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3 * 1000,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({ user, token: token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const token = createToken(user._id);
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 3 * 1000,
          sameSite: "none",
          secure: true,
        });
        res.status(200).json({ user, token: token });
      } else throw Error("Authentication failed");
    } else throw Error("Authentication failed");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.postLike = async (req, res) => {
  try {
    const like = await ArtifactSocialInfo.findOneAndUpdate(
      { id: req.params.ProductID },
      { $inc: { likes: 1 } },
      { upsert: true, returnNewDocument: true }
    );
    res.status(200).json({ like });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1, sameSite: "none", secure: true });
  res.send({ message: "logged" });
};
exports.saveArt = async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      $push: {
        liked: req.params.ProductID,
      },
    },
    { returnNewDocument: true, new: true }
  );
  res.send(user);
};

exports.ProductLikes = async (req, res) => {
  const art = await ArtifactSocialInfo.findOneAndUpdate(
    { id: req.params.ProductID },
    {
      $inc: { likes: 0 },
    },
    { upsert: true, returnNewDocument: true, new: true }
  );

  res.json(art);
};

exports.getUser = (req, res) => {
  res.json({ user: req.user });
};

exports.UploadImage = async (req, res) => {
  try {
    const url = req.protocol + "://" + req.get("host");

    const result = await cloudinary.uploader.upload(req.file.path);
    const USER = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $set: {
          profileImg: result.secure_url,
        },
      },
      { new: true, returnDocument: true }
    );
    res.status(200).json({ user: USER });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.artifactInfo = async (req, res) => {
  const node = req.params.node;
  const options = {
    uri: "https://app.scrapingbee.com/api/v1?",
    qs: {
      api_key:
        "34TOQQ77QJALLR07ISPYL4B5EYHW3YLU5GM97GQOCA32BVW3S0S6RTVFCZGTHZ1Q5MHH1Z9GZ0B640LI",
      url: `https://www.metmuseum.org/art/collection/search/${node}`,
    },
  };
  rp(options)
    .then((response) => {
      const $ = cheerio.load(response);
      const text = $(".artwork__intro__desc p").text();

      if (!text) {
        res.json({ err: "No information available found for this artifact" });
      } else {
        res.json({ message: $(".artwork__intro__desc p").text() });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
