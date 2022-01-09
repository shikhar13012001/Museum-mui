const { User, ArtifactSocialInfo } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createToken = (id) => {
  return jwt.sign({ id }, "SECRET_KEY", {
    expiresIn: 60 * 60 * 24 * 3,
  });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name: name, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3 * 1000,
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
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
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
    const ImgPath = url + "/public/" + req.file.filename;
    const USER = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $set: {
          profileImg: ImgPath,
        },
      },
      { new: true, returnDocument: true }
    );
    res.status(200).json({ user: USER });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
