const data = [
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Giotto_di_Bondone_portrait.jpg",
    Artist: "GIOTTO DI BONDONE",
    Date: "(c.1267-1337)",
    Desc: "The greatest renovator of early European painting, Giotto was the first to deviate from the rigid course of Byzantine painting. With his unusually imaginative talent, his original iconographies, and his remarkable love for the nature and the human expression, Giotto revolutionized Western Art to the point that many critics consider him, not without reason, the first genius of European painting, praised by his contemporaries Dante, Petrarca and Boccaccio.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/07/Leonardo_da_Vinci_-Self-portrait_small.jpg",
    Artist: "LEONARDO DA VINCI",
    Date: "(1452-1519)",
    Desc: "There is no artist more legendary than Leonardo da Vinci. In the entire History of Art, no other name has generated more debates, more discussions and more hours of study than the genius born in Vinci in 1452, who will be always known as the author of the most famous painting of all times, the <em>Gioconda </em>or <em>Mona Lisa</em>.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Paul_Cezanne_-_Self-portrait_-_1879-80.jpg",
    Artist: "PAUL CÉZANNE",
    Date: "(1839-1906)",
    Desc: "“Cézanne is the father of us all”. This lapidary phrase has been attributed to both Picasso and Matisse, and it certainly matters little who actually said it, because it is true in any case.Riding the wave of fresh air that Impressionism represented, Cézanne left the entire Impressionist group behind to develop a style of painting hitherto unseen, which opened the door wide for the arrival of Cubism and the rest of the 20th century avant-garde.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Rembrandt_van_Rijn_-_Self-Portrait_-_1659.jpg",
    Artist: "REMBRANDT VAN RIJN",
    Date: "(1606-1669)",
    Desc: "The fascinating, magnetic interplay of light and shadow in his works seems a reflection of his life, which went from fame to oblivion while his technique only improved. His self-portraits, by far the most fascinating in the history of painting, tell us of a sincere and honest painter, a master capable of penetrating the mind of the greatest stranger: oneself.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Diego_Velazquez_-_Self-portrait_-_1645.jpg",
    Artist: "DIEGO VELÁZQUEZ",
    Date: "(1599-1660)",
    Desc: "Along with Rembrandt, Velázquez represents the zenith of Baroque painting. But unlike the Dutchman, the Sevillian artist spent most of his life in the comfortable but rigid court society. Despite this, Velázquez was a renovator, a “painter of atmospheres” almost two centuries before Turner or the Impressionists, and he captured this in his colossal royal paintings (“<em>Meninas</em>“, “<em>The Forge of Vulcan</em>“) as well as in the bold and unforgettable sketches of the Villa Medici.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Wassily_Kandinsky_-_photo.jpg",
    Artist: "WASSILY KANDINSKY",
    Date: "(1866-1944)",
    Desc: "Although the title of “father of abstraction” has been assigned to several artists, from Picasso to Turner, few painters claim it with as many motives as Kandinsky. Many artists have succeeded in painting emotion, but very few have changed the way we understand art. Wassily Kandinsky is one of them.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Claude_Monet_-_1899.jpg",
    Artist: "CLAUDE MONET",
    Date: "(1840-1926)",
    Desc: "The importance of Monet in the history of art is sometimes “underrated”, as Art lovers tend to see only the overwhelming beauty that emanates from his canvases, ignoring the complex technique and composition of the work (a “defect” somehow caused by Monet himself, when he declared that “I do not understand why everyone discusses my art and pretends to understand, as if it were necessary to understand, when it is simply necessary to love”). However, Monet’s experiments, including his studies on the changes in the same object caused by daylight at different times of the day; and the almost abstract quality of his “water lilies”, are clearly a prologue to the art of the twentieth century.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/07/Ottavio_Leoni_-_Portrait_of_Caravaggio_small.jpg",
    Artist: "MICHELANGELO MERISI DA CARAVAGGIO",
    Date: "(1571-1610)",
    Desc: "The tough and violent Caravaggio is considered the father of Baroque painting, with his spectacular use of lights and shadows. Caravaggio’s chiaroscuro became so famous that many painters started to copy his paintings, creating the ‘Caravaggisti’ style.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jan_van_Eyck_-_Portrait_of_a_Man_in_a_Turban_-_1433.jpg",
    Artist: "JAN VAN EYCK",
    Date: "(1390-1441)",
    Desc: "Van Eyck is the colossal pillar on which all Flemish painting of later centuries rests, a genius of precision, perspective and meticulousness, far above any other artist of his time, Flemish or Italian.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/William_Turner_-_selfportrait.jpg",
    Artist: "JOSEPH-MALLORD WILLIAM TURNER",
    Date: "(1775-1851)",
    Desc: "Turner is the best landscape painter of Western painting. Albeit an academic painter during his first years, Turner slowly but unstoppably evolved towards a free, atmospheric style, sometimes even outlining the abstraction, which was misunderstood and rejected by the same critics who then admired him for decades.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Albrecht_Durer_-_Self-portrait.jpg",
    Artist: "ALBRECHT DÜRER",
    Date: "(1471-1528)",
    Desc: "The real Leonardo da Vinci of Northern European Rennaisance was Albrecht Dürer, a restless and innovative genious, master of drawing and color. He was one of the first artists to represent nature without artifice, either in his painted landscapes or in his drawings of plants and animals.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Michelangelo_Buonarroti_-_1545.jpg",
    Artist: "MICHELANGELO BUONARROTI",
    Date: "(1475-1564)",
    Desc: "Some readers will be quite surprised to see a man who is arguably the greatest artistic genius of all time out of the “top ten” of this list, but the fact is that even Michelangelo defined himself as “sculptor”, and even his painted masterpiece (the frescoes in the Sistine Chapel) are often defined as ‘painted sculptures’. Nevertheless, that unforgettable masterpiece is enough to guarantee him a place of honor in the history of painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Francisco_de_Goya_por-Vicente_Lopez_Portana-_1826_-_94_x_78_cm_-_Prado_Museum_-_Madrid.jpg",
    Artist: "FRANCISCO DE GOYA",
    Date: "(1746-1828)",
    Desc: "Goya is an enigma. In the whole History of Art few figures are as complex as the artist born in Fuendetodos, Spain. Enterprising and indefinable, a painter with no rival in all his life, Goya was the painter of the Court and the painter of the people. He was a religious painter and a mystical painter. He was the author of the beauty and eroticism of the ‘Maja desnuda’ and the creator of the explicit horror of ‘The Third of May, 1808’. He was an oil painter, a fresco painter, a sketcher and an engraver. And he never stopped his metamorphosis.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Vincent_van_Gogh_-_Self-Portrait_-_1887_-_42_x_33.7_cm_-_Art_Institute_of_Chicago.jpg",
    Artist: "VINCENT VAN GOGH",
    Date: "(1853-1890)",
    Desc: "Few names in the history of painting are now as famous as Van Gogh, despite the complete neglect he suffered in life. His works, strong and personal, are one of the greatest influences in the twentieth century painting, especially for the German Expressionism.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Edouard_Manet_-_1832-1883.jpg",
    Artist: "ÉDOUARD MANET",
    Date: "(1832-1883)",
    Desc: "Manet was the origin of Impressionism, a revolutionary in a time of great artistic revolutions. His (at the time) quite polemical “<em>Olympia</em>” or “<em>Déjeuner sur l’Herbe</em>” opened the way for the great figures of the Impressionism.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Henri_Matisse_-_1869-1954.jpg",
    Artist: "HENRI MATISSE",
    Date: "(1869-1954)",
    Desc: "Some art critics tend to regard Matisse as the greatest exponent of twentieth century painting, only surpassed by Picasso. That is quite debatable, although the almost pure use of color in some of his works strongly influenced many of the following avant-gardes.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Raffaello_Sanzio_-_1483-1520.jpg",
    Artist: "RAFFAELLO SANZIO",
    Date: "(1483-1520)",
    Desc: "Equally loved and hated in different eras, no one can doubt that Raphael is one of the greatest geniuses of the Renaissance, with an excellent technique in terms of drawing and color.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jackson_Pollock_-_Photo_picture.jpg",
    Artist: "JACKSON POLLOCK",
    Date: "(1912-1956)",
    Desc: "The major figure of American Abstract Expressionism, Pollock created his best works, his famous <em>drips</em>, between 1947 and 1950. After those fascinating years, comparable to Picasso’s Blue Period or van Gogh’s final months in Auvers, he abandoned the <em>drip</em>, and his latest paintings are often bold, uninspired works.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Domenikos_Theotokopoulos_-_El_Greco_-_1541-1614.jpg",
    Artist: "DOMENIKOS THEOTOKOPOULOS · EL GRECO",
    Date: "(1541-1614)",
    Desc: "One of the most original and fascinating artists of his era, with a very personal technique that was admired, three centuries later, by the impressionist painters. A true innovator in the broadest sense of the word.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Paul_Gauguin_-_Portrait_de_lartiste_au_Christ_jaune_-_1890_-_Oil_on_canvas_-_38_x_46_cm_-_Musee_dOrsay_-_Paris.jpg",
    Artist: "PAUL GAUGUIN",
    Date: "(1848-1903)",
    Desc: "One of the most fascinating figures in the history of painting, his works moved from Impressionism (soon abandoned) to a colorful and vigorous symbolism, as can be seen in his ‘Polynesian paintings’. Matisse and Fauvism could not be understood without the works of Paul Gauguin.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jean-Michel_Basquiat_-_1960-1988.jpg",
    Artist: "JEAN-MICHEL BASQUIAT",
    Date: "(1960-1988)",
    Desc: "Basquiat is undoubtedly the most important and famous member of the “graffiti movement” that appeared in the New York scene in the early’80s, an artistic movement whose enormous influence on later painting is still to be measured.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Edvard_Munch_-_Self-portrait_with_cigarette_-_1895_-_Oil_on_canvas_-_National_Museum_of_Art_Architecture_and_Design.jpg",
    Artist: "EDVARD MUNCH",
    Date: "(1863-1944)",
    Desc: "Modernist in his context, Munch could be also considered the first expressionist painter in history. Works like “The Scream” are vital for the understanding of twentieth century painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Titian_-_Self-portrait_-_1546-1547_-_Oil_on_canvas_-_96_x_75_cm_-_Gemaldegalerie_-_Berlin.jpg",
    Artist: "TIZIANO VECELLIO DI GREGORIO",
    Date: " (c.1476-1576)",
    Desc: "After the premature death of Giorgione, Titian became the leading figure of Venetian painting of his time. His use of color and his taste for mythological themes defined the main features of 16th century Venetian Art. His influence on later artists -Rubens, Velázquez…- is extremely important.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Artemisia_Gentileschi_-_Self-portrait_as_the_Allegory_of_Painting_La_Pittura_-_1593-1653.jpg",
    Artist: "ARTEMISIA GENTILESCHI",
    Date: "(1597-1654)",
    Desc: "One of the most gifted artists of the early baroque era, she was the first female painter to become a member of the Accademia di Arte del Disegno in Florence. During the last decades reevaluation of her work has placed Gentileschi in the place she deserves among the greatest painters of her era.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Francis_Bacon_-_by_Gray_-_1909-1992.jpg",
    Artist: "FRANCIS BACON",
    Date: "(1909-1992)",
    Desc: "Maximum exponent, along with Lucian Freud, of Postwar British Art, Bacon’s painting rebelled against all the canons of previous painting, not only in terms of beauty, but also against the abstraction of the dominant Abstract Expressionism of the time.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Andy_Warhol_-_Stockholm_1968.jpg",
    Artist: "ANDY WARHOL",
    Date: "(1928-1987)",
    Desc: "Brilliant and controversial, Warhol is the leading figure of pop-art and one of the icons of contemporary art. His silkscreen series depicting icons of the mass-media (as a reinterpretation of Monet’s series of Water lilies or the Rouen Cathedral) are one of the milestones of contemporary Art, with a huge influence in the Art of our days",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_1577-1640.jpg",
    Artist: "SIR PETER PAUL RUBENS",
    Date: "(1577-1640)",
    Desc: "Rubens was one of the most prolific painters of all time, thanks in part to the collaboration of his study. Very famous in life, he traveled around Europe to meet orders from very wealthy and important clients. His female nudes are still amazing in our days.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Johannes_Vermeer_-_De_koppelaarster_-_1656_-_Oil_on_canvas_-_143_x_130_cm.jpg",
    Artist: "JOHANNES VERMEER",
    Date: "(1632-1675)",
    Desc: "Vermeer was the leading figure of the Delft School, and for sure one of the greatest genre painters of all time. Works such as “<em>View of the Delft</em>” are considered almost “impressionist” due to the liveliness of his brushwork. He was also a skilled portraitist, and his “<em>Girl With a Pearl Earring</em>” has been called the “Mona Lisa of the North”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Joan_Miro_-_Self-portrait_-_1919_-_Musee_Picasso.jpg",
    Artist: "JOAN MIRÓ",
    Date: "(1893-1983)",
    Desc: "Like most geniuses, Miro is an unclassificable artist. His interest in the world of the unconscious, those ideas and emotions hidden in the depths of the mind, link him with Surrealism, but with a personal style, sometimes closer to Fauvism and Expressionism. His most important works are those from the series of “<em>Constellations</em>“, created in the early 40s.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Masaccio_Self_Portrait_-_Tommaso-di-ser-Giovanni-di-Mone-Cassai.jpg",
    Artist: "TOMMASO MASACCIO",
    Date: "(1401-1428)",
    Desc: "Masaccio was one of the first old masters to use the laws of scientific perspective in his works. One of the greatest and most innovative painters of the Early Renaissance.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Piero_della_Francesca_-_1415-1492.jpg",
    Artist: "PIERO DELLA FRANCESCA",
    Date: "(1416-1492)",
    Desc: "Despite being one of the most important figures of the quattrocento, the art of Piero della Francesca has been described as “cold”, “hieratic” or even “impersonal”. But with the apparition of Berenson and the great historians of his era, like Michel Hérubel -who admired the “metaphysical dimension” of the paintings by Piero-, his precise and detailed Art finally occupied the place that it deserves in the History of Art.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Piet_Mondrian_-_Self-portrait_-_1900.jpg",
    Artist: "PIET MONDRIAN",
    Date: "(1872 -1944)",
    Desc: "Along with Kandinsky and Malevich, Mondrian is the leading figure of early abstract painting. After emigrating to New York, Mondrian filled his abstract paintings with a fascinating emotional quality, as it can be seen in his series of “boogie-woogies” created in the mid-40s.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Gustave_Courbet_-_Le_Desespere_-_1843.jpg",
    Artist: "GUSTAVE COURBET",
    Date: "(1819-1877)",
    Desc: "Leading figure of realism, and a key precedent for the impressionists, Courbet was one of the greatest revolutionaries, both as an artist and as a social-activist, of the history of painting. Like Rembrandt and other predecessors, Courbet did not seek to create beauty, but believed that beauty is achieved when the artist represents the purest reality without artifice.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Nicolas_Poussin_-_Self-portrait_-_1594-1665.jpg",
    Artist: "NICOLAS POUSSIN",
    Date: "(1594-1665)",
    Desc: "The greatest among the great French Baroque painters, Poussin had a vital influence on French painting for many centuries. His use of color is unique among all the painters of his era.",
  },
  {
    image: "https://theartwolf.com/wp-content/uploads/2021/06/Gustav_Klimt.jpg",
    Artist: "GUSTAV KLIMT",
    Date: "(1862-1918)",
    Desc: "Half way between modernism and symbolism appears the figure of Gustav Klimt, who was also devoted to the industrial arts. His nearly abstract landscapes also make him a forerunner of geometric abstraction.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Eugene_Delacroix_-_Portrait_de_lartiste_ca.1837_-_1798-1863_-_Louvre_-_Paris.jpg",
    Artist: "EUGÈNE DELACROIX",
    Date: "(1798-1863)",
    Desc: "Eugène Delacroix is the French romanticism painter “par excellence” and one of the most important names in the European painting of the first half of the 19th century. His famous “Liberty leading the People” also demonstrates the capacity of Painting to become the symbol of an era.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Paolo_Uccello_-_1397-1475_-_Louvre_-_Paris.jpg",
    Artist: "PAOLO UCCELLO",
    Date: "(1397-1475)",
    Desc: "“Solitary, eccentric, melancholic and poor”. Giorgio Vasari described with these four words one of the most audacious geniuses of the early Florentine Renaissance, Paolo Uccello. Without a doubt, one of the key figures of the Quattrocento.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/William_Blake_-_1770-1845.jpg",
    Artist: "WILLIAM BLAKE",
    Date: "(1757-1827)",
    Desc: "Revolutionary and mystic, painter and poet, Blake is one of the most fascinating artists of any era. His watercolors, prints and temperas are filled with a wild imagination (almost crazyness), unique among the artists of his era",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Caspar_David__Friedrich_-_1774-1840.jpg",
    Artist: "CASPAR DAVID FRIEDRICH",
    Date: "(1774-1840)",
    Desc: "Leading figure of German Romantic painting, Friedrich was, as David d’Angers said, a man who had discovered ‘the tragedy of landscape’, a painter of landscapes of loneliness and distress, with human figures facing the terrible magnificence of nature.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Frida_Kahlo_-_1907-1954.jpg",
    Artist: "MAGDALENA CARMEN FRIDA KAHLO CLADERÓN",
    Date: "(1907-1954)",
    Desc: "In recent years, Frida’s increasing fame seems to have obscured her importance in Latin American art. Marked since childhood by the physical aftermath of a bus accident, Kahlo’s self-portraits seem like silent, yet powerful wails.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Kazimir_Malevich_-_Self-Portrait_-_1878-1935.jpg",
    Artist: "KAZIMIR MALEVICH",
    Date: "(1878-1935)",
    Desc: "Creator of Suprematism (do not mispell this word…), Malevich will forever be one of the most controversial figures of the history of art among the general public, divided between those who consider him an essential innovator and those who consider that his works based on polygons of pure colors do not deserve to be considered Art.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Winslow_Homer_-_1836-1910.jpg",
    Artist: "WINSLOW HOMER",
    Date: "(1836-1910)",
    Desc: "The main figure in the American painting of his era, Homer was a breath of fresh air for the American artistic scene, which was somewhat “stuck” in the academic painting and the more romantic Hudson River School. Homer’s loose and lively brushstroke is almost impressionistic.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Gerhard_Richter_-_Prague_-_2017.jpg",
    Artist: "GERHARD RICHTER",
    Date: "(born 1932)",
    Desc: "One of the most important artists of recent decades, Richter is known either for his fierce and colorful abstractions and for his serene and photorealistic landscapes and scenes with candles.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Marcel_Duchamp_-_1887-1968_-_Yale_University_Art_Gallery.jpg",
    Artist: "MARCEL DUCHAMP",
    Date: "(1887-1968)",
    Desc: "One of the major figures of Dadaism and a prototype of “total artist”, Duchamp is one of the most important and controversial figures of his era. His contribution to painting is just a small part of his huge contribution to the art world.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Sandro_Botticelli_-_1445-1510.jpg",
    Artist: "SANDRO BOTTICELLI",
    Date: "(1445-1510)",
    Desc: "“If Botticelli were alive today, he would be working for Vogue”, said actor Peter Ustinov. As well as Raphael, Botticelli had been equally loved or hated in different eras, but his use of color is one of the most fascinating among all old masters.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Edward_Hopper_-_1882-1967.jpg",
    Artist: "EDWARD HOPPER",
    Date: "(1882-1967)",
    Desc: "Hopper is widely known as the painter of urban loneliness. His most famous work, the fabulous “Nighthawks” (1942) has become the symbol of the solitude of the contemporary metropolis, and it is one of the icons of the 20th century Art.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Mark_Rothko_-_Painter_Denisova_Olesya_Alexandrovna.jpg",
    Artist: "MARK ROTHKO",
    Date: "(1903-1970)",
    Desc: "The influence of Rothko in the history of painting is yet to be quantified, because the truth is that half a century after his death the influence of Rothko’s large, dazzling and emotional masses of color continues to be present in many painters of the 21st century.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/10/Jenny_Saville_-_Self_Portrait_-_thumbnail.jpg",
    Artist: "JENNY SAVILLE",
    Date: "(b.1970) ",
    Desc: "If Tracey Emin is the <em>enfant terrible</em> of the Young British Artists, Jenny Saville is their <em>wunderkind</em>, the artist whose works created in her early twenties changed forever the concept of the female nude in Western Art.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Andrea_Mantegna_-_detail_possible_self-portrait.jpg",
    Artist: "ANDREA MANTEGNA",
    Date: "(1431-1506)",
    Desc: "One of the greatest exponents of the Quattrocento, interested in the human figure, which he often represented under extreme perspectives (“The Dead Christ”).",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Paul_Klee_-_Senecio_Head_of_a_man_-_1879-1940.jpg",
    Artist: "PAUL KLEE",
    Date: "(1879-1940)",
    Desc: "In a period of artistic revolutions and innovations, few artists were as crucial as Paul Klee. His studies of color, widely taught at the Bauhaus, are unique among all the artists of his time.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Marc-Chagall_-_1887-1985.jpg",
    Artist: "MARC CHAGALL",
    Date: "(1887-1985)",
    Desc: "Artist of dreams and fantasies, Chagall was for all his life an immigrant fascinated by the lights and colors of the places he visited. Few names from the School of Paris of the early twentieth century have contributed so much -and with such variety of ideas- to change modern Art as this man “impressed by the light,” as he defined himself.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Hans_Holbein_the_Younger_-_Self-portrait_-_1497-1543.jpg",
    Artist: "HANS HOLBEIN THE YOUNGER",
    Date: "(1497-1543)",
    Desc: "After Dürer, Holbein is the greatest of the German painters of his time. The fascinating portrait of “The Ambassadors” is still considered one of the most enigmatic paintings from the Renaissance.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Edgar_Degas_-_self_portrait_photograph_1895_-_1834-1917.jpg",
    Artist: "EDGAR DEGAS",
    Date: "(1834-1917)",
    Desc: "Though Degas was really not a impressionist painter, his works shared the ideals of that artistic movement. Degas paintings of young dancers or ballerinas are icons of the late 19th century painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Fra_Angelico_-_1395-1455.jpg",
    Artist: "FRA ANGELICO",
    Date: "(1387-1455)",
    Desc: "One of the great colorists from the early Renaissance. Initially trained as an illuminator, he is the author of masterpieces such as “The Annunciation” in the Prado Museum.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Georges_Seurat_-_1888.jpg",
    Artist: "GEORGES SEURAT",
    Date: "(1859-1891)",
    Desc: "Georges Seurat is one of the most important post-impressionist painters, and he is considered the creator of the “pointillism”, a style of painting in which small distinct points of primary colors create the impression of a wide selection of secondary and intermediate colors.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Antoine_Watteau_-_1684-1721.jpg",
    Artist: "JEAN-ANTOINE WATTEAU",
    Date: "(1684-1721)",
    Desc: "Watteau is today considered one of the pioneers of the Rococo style. Unfortunately, he died at the height of his powers, as it is evidenced in the great portrait of “Gilles” painted in the year of his death.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Salvador_Dali_-_1972.jpg",
    Artist: "SALVADOR DALÍ",
    Date: "(1904-1989)",
    Desc: "“I am Surrealism!” shouted Dalí when he was expelled from the surrealist movement by André Breton. Although the quote sounds presumptuous (which was not unusual in Dalí), the fact is that Dalí’s paintings are now the most famous images of all the surrealist movement.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Willem_de_Kooning_in_his_studio_-_1904-1997.jpg",
    Artist: "WILLEM DE KOONING",
    Date: "(1904-1997)",
    Desc: "After Pollock, the leading figure of abstract expressionism, albeit he never felt limited to the abstraction, often resorting to a heartbreaking figurative painting (his series of “Women” are the best example) with a major influence on later artists such as Francis Bacon or Lucian Freud.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/David_Hockney_-_2017_at_Flash_Expo.jpg",
    Artist: "DAVID HOCKNEY",
    Date: "(born 1937)",
    Desc: "David Hockney is one of the living myths of the Pop Art. Born in Great Britain, he moved to California, where he immediately felt identified with the light, the culture and the urban landscape of the ‘Golden State’.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Max_Ernst_-_1968.jpg",
    Artist: "MAX ERNST",
    Date: "(1891-1976)",
    Desc: "Halfway between Surrealism and Dadaism appears Max Ernst, important in both movements. Ernst was a brave artistic explorer thanks in part to the support of his wife and patron, Peggy Guggenheim.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Tintoretto_-_Self-portrait_-_1518-1594.jpg",
    Artist: "TINTORETTO",
    Date: "(1518-1594)",
    Desc: "Tintoretto is the most flamboyant of all Venetian masters (not the best, such honour can only be reclaimed by Titian or Giorgione) and his remarkable oeuvre not only closed the Venetian splendour (until the apparition of Canaletto and his contemporaries), but also makes him the last of the Cinquecento masters.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jasper_Johns_-_1930-present.jpg",
    Artist: "JASPER JOHNS",
    Date: "(born 1930)",
    Desc: "A legend of the early Pop Art, although he has never considered himself a “pop artist”. His most famous works are the series of “Flags” and “Targets”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Umberto_Boccioni_-_Self-portrait_oil_on_canvas_1905_Metropolitan_Museum_of_Art.jpg",
    Artist: "UMBERTO BOCCIONI",
    Date: "(1882-1916)",
    Desc: "The maximum figure of Italian Futurism, fascinated by the world of the industry, and the movement as a symbol of contemporary times.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Duccio_di_Buoninsegna_-_1255-1319.jpg",
    Artist: "DUCCIO DA BUONINSEGNA",
    Date: "(1255/60 – 1318/19)",
    Desc: "While in Florence Giotto di Bondone was changing the history of painting, Duccio of Buoninsegna provided a breath of fresh air to the important Sienese School.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Rogier_van_der_Weyden_-_1399-1464.jpg",
    Artist: "ROGER VAN DER WEYDEN",
    Date: "(1399-1464)",
    Desc: "After Van Eyck, the leading exponent of Flemish painting in the fifteenth century; a master of perspective and composition.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/John_Constable_-_1800-1837.jpg",
    Artist: "JOHN CONSTABLE",
    Date: "(1776-1837)",
    Desc: "John Constable (1776-1837) is, along with Turner, the great figure of English romanticism. But unlike his contemporary, he never left England, and he devoted all his time to represent the life and landscapes of his beloved England.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jacques-Louis_David_-_Self-portrait_-_1748-1825.jpg",
    Artist: "JACQUES-LOUIS DAVID",
    Date: "(1748-1825)",
    Desc: "David is the summit of neoclassicism, a grandiloquent artist whose compositions seem to reflect his own hectic and revolutionary life.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Arshile_Gorky_-_1904-1948.jpg",
    Artist: "ARSHILLE GORKY",
    Date: "(1905-1948)",
    Desc: "Armenian-born American painter, Gorky was a surrealist painter and also one of the leaders of abstract expressionism. He was called “the Ingres of the unconscious”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Giorgio_Barbarelli_da_Castelfranco_-_Giorgione_-_Self-portrait_as_David_-_1478-1510.jpg",
    Artist: "GIORGIO BARBARELLI DA CASTELFRANCO",
    Date: "(1478-1510)",
    Desc: "Like so many other painters who died at young age, Giorgione (1477-1510) makes us wonder what place would his exquisite painting occupy in the history of Art if he had enjoyed a long life, just like his direct artistic heir -Titian- did.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Hieronymus_Bosch_-_1533-1578.jpg",
    Artist: "HIERONYMUS BOSCH",
    Date: "(1450-1516)",
    Desc: "An extremely religious man, all works by Bosch are basically moralizing, didactic. The artist saw the society of his time as the triumph of sin, the depravation, and all the things that have caused the fall of the human being from its angelical character; and he wanted to warn his contemporaries about the terrible consequences of his impure acts.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer_1565_-_1526-1569.jpg",
    Artist: "PIETER BRUEGEL THE ELDER",
    Date: "(1528-1569)",
    Desc: "Many people find important similarities between the works by Hyeronimus Bosch and those by Brueghel, but the truth is that the differences between both of them are abysmal. Whereas Bosch’s fantasies are born of a deep deception and preoccupation for the human being, with a clearly moralizing message; works by Bruegel are full of irony, and even filled with a love for the rural life, which seems to anticipate the Dutch landscape paintings from the next century.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Simone_Martini_-_Ritratto_-_1284-1344.jpg",
    Artist: "SIMONE MARTINI",
    Date: "(1284-1344)",
    Desc: "One of the great painters of the Trecento, he was a step further and helped to expand its progress, which culminated in the “International Style”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Franz_Marc_-_1880-1916.jpg",
    Artist: "FRANZ MARC",
    Date: "(1880-1916)",
    Desc: "After Kandinsky, the great figure of the Expressionist group “The Blue Rider” and one of the most important expressionist painters ever. He died at the height of his artistic powers, when his use of color was even anticipating the later abstraction.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/10/Hilma_af_Klint_c.1885.jpg",
    Artist: "HILMA AF KLINT",
    Date: "(1862-1944)",
    Desc: "A pioneer of abstract art, Hilma af Klint was a painter who remained – by her own wish – outside any organized artistic movement. Nevertheless, in recent years she has achieved unanimous recognition as one of the most original figures of modernism.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Theodore_Gericault_-_Portrait_of_a_Kleptomaniac_-_1791-1824.jpg",
    Artist: "THEODORE GÉRICAULT",
    Date: "(1791-1824)",
    Desc: "Key figure in romanticism, revolutionary in his life and works despite his bourgeois origins. In his masterpiece, “The raft of the Medusa”, Gericault creates a painting that we can define as “politically incorrect”, as it depicts the miseries of a large group of castaways abandoned after the shipwreck of a French naval frigate.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/William_Hogarth_-_Self-Portrait_-_1697-1764.jpg",
    Artist: "WILLIAM HOGARTH",
    Date: "(1697-1764)",
    Desc: "A list of the great portrait painters of all time should never miss the name of William Hogarth, whose studies and sketches could even qualify as “pre-impressionist”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jean-Baptiste_Camille_Corot_-_Self-portrait_-_1796-1875.jpg",
    Artist: "JEAN-BAPTISTE CAMILLE COROT",
    Date: "(1796-1875)",
    Desc: "One of the great figures of French realism in the 19th century and certainly one of the major influences for the impressionist painters like Monet or Renoir, thanks to his love for “plen-air” painting, emphasizing the use of light.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Georges_Braque_-_1908_-_1882-1963.jpg",
    Artist: "GEORGES BRAQUE",
    Date: "(1882-1963)",
    Desc: "Along with Picasso and Juan Gris, the main figure of Cubism, the most important of the avant-gardes of the 20th century Art.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Berthe_Marie_Pauline_Morisot_-_Self-portrait_-_1841-1895.jpg",
    Artist: "BERTHE MARIE PAULINE MORISOT",
    Date: "(1841-1895)",
    Desc: "One of the most talented painters from the age of the impressionism, considered one of “les trois grandes dames” of the Impressionism along with Mary Cassatt and Marie Bracquemond.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/James_Abbot_McNeill_Whistler_-_Selbstportrat_-_1834-1903.jpg",
    Artist: "JAMES ABBOT MCNEILL WHISTLER",
    Date: "(1834-1903)",
    Desc: "Along with Winslow Homer, the great figure of the American painting of his time. Whistler was an excellent portraitist, which is shown in the fabulous portrait of his mother, considered one of the great masterpieces of the American painting of all time.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Frederic_Edwin_Church_-_1826-1900.jpg",
    Artist: "FREDERIC EDWIN CHURCH",
    Date: "(1826-1900)",
    Desc: "Church represents the culmination of the Hudson River School: he had Thomas Cole’s love for the landscape, Asher Brown Durand’s romantic lyricism, and Albert Bierstadt’s grandiloquence, but he was braver and technically more gifted than anyone of them. Church is without any doubt one of the greatest landscape painters of all time, perhaps only surpassed by Turner and some impressionists and postimpressionists like Monet or Cézanne.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Georges_de_La_Tour_-_1593-1652.jpg",
    Artist: "GEORGES DE LA TOUR",
    Date: "(1593-1652)",
    Desc: "The influence of Caravaggio is evident in De la Tour, whose use of light and shadows is unique among the painters of the Baroque era.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jean-Francois_Millet_-_1814-1875.jpg",
    Artist: "JEAN.FRANÇOIS MILLET",
    Date: "(1814-1875)",
    Desc: "One of the main figures of the Barbizon School, creator of one of the most emotive paintings of the 19th century: The “Angelus”.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Amedeo_Modigliani_-_1918_-_1884-1920.jpg",
    Artist: "AMEDEO MODIGLIANI",
    Date: "(1884-1920)",
    Desc: "One of the most original portraitists of the history of painting, considered as a “cursed” painter because of his wild life and early death.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Elisabeth-Louise_Vigee-Lebrun_-_Self-portrait_-_1755-1842.jpg",
    Artist: "ÉLISABETH-LOUISE VIGÉE LE BRUN",
    Date: "(1755-1842)",
    Desc: "Placed between the late Rococo and the early Neoclassical, Élisabeth Vigée Le Brun was one of the most sought-after portraitists of her era.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Rene_Magritte_-_1898-1967.jpg",
    Artist: "RENÉ MAGRITTE",
    Date: "(1898-1967)",
    Desc: "One of the leading figures of surrealism, his apparently simple works are the result of a complex reflection about reality and the world of dreams",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Cimabue_-_1240-1302.jpg",
    Artist: "CIMABUE",
    Date: " (c.1240-1302)",
    Desc: "Although in some of his works Cimabue already represented a visible evolution of the rigid Byzantine art, his greatest contribution to painting was to discover a young talented artist named Giotto (see number 2), who changed forever the Western painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Pierre-Auguste_Renoir_-_Self-portrait_-_1876_-_1841-1919.jpg",
    Artist: "PIERRE-AUGUSTE RENOIR",
    Date: "(1841-1919)",
    Desc: "One of the key figures of Impressionism, he soon left the movement to pursue a more personal, academic painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Egon_Schiele_-_Self-Portrait_with_Physalis_-_1912_-_1890-1918.jpg",
    Artist: "EGON SCHIELE",
    Date: "(1890-1918)",
    Desc: "Another “died too young” artist, his strong and ruthless portraits influenced the works of later artists, like Lucian freud or Francis Bacon.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Dante_Gabriel_Rossetti_-_1828-1882_-_by_George_Frederic_Watts.jpg",
    Artist: "DANTE GABRIEL ROSSETTI",
    Date: "(1828-1882)",
    Desc: "Perhaps the key figure in the pre-Raphaelite movement, Rossetti left the poetry to focus on classic painting with a style that influenced the symbolism.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Frans_Hals_-_Self-Portrait_-_1580-1666.jpg",
    Artist: "FRANS HALS",
    Date: " (c.1580-1666)",
    Desc: "One of the most important portraitists ever, his lively brushwork influenced early impressionism.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Claude_Lorrain_-_1600-1682.jpg",
    Artist: "CLAUDE LORRAIN",
    Date: "(1600-1682)",
    Desc: "His works were a vital influence on many landscape painters for many centuries, both in Europe (Corot, Courbet) and in America (Hudson River School).",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Roy_Lichtenstein_-_1923-1997.jpg",
    Artist: "ROY LICHTENSTEIN",
    Date: "(1923-1977)",
    Desc: "Along with Andy Warhol, the most famous figure of the American Pop-Art. His works are often related to the style of the comics, though Lichtenstein rejected that idea.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Georgia_OKeeffe_-_1887-1986.jpg",
    Artist: "GEORGIA O’KEEFE",
    Date: "(1887-1986)",
    Desc: "A leading figure in the 20th century American Art, O’Keefe single-handedly redefined the Western American painting.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Banksy_-_unknown.jpg",
    Artist: "BANKSY",
    Date: "(born 1974?)",
    Desc: "The most recent and most mysterious name in this list is Banksy, pseudonymous of the most famous street artist of our era.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/William_Bouguereau_-_Self-portrait_-_1825-1905.jpg",
    Artist: "WILLIAM-ADOLPHE BOUGUEREAU",
    Date: "(1825-1905)",
    Desc: "Another case of “love him or hate him” artist. Admired and extremely sought-after during his time, after the rise of the avant-garde his style fell into oblivion, altough he has been somewhat “rediscovered” in recent years.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Gustave_Moreau_-_1826-1898.jpg",
    Artist: "GUSTAVE MOREAU",
    Date: "(1826-1898)",
    Desc: "One of the key figures of symbolism, introverted and mysterious in life, but very free and colorful in his works.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Giorgio_de_Chirico_-_1888-1978.jpg",
    Artist: "GIORGIO DE CHIRICO",
    Date: "(1888-1978)",
    Desc: "Considered the father of metaphysical painting and a major influence on the Surrealist movement.",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Fernand_Leger_-_1881-1955.jpg",
    Artist: "FERNAND LÉGER",
    Date: "(1881-1955)",
    Desc: "A pure cubist painter during his early decades, Leger was increasingly attracted to the world of machinery and movement, creating works such as “The Discs” (1918).",
  },
  {
    image:
      "https://theartwolf.com/wp-content/uploads/2021/06/Jean-Auguste-Dominique_Ingres_-_Self-portrait_-_1780-1867.jpg",
    Artist: "JEAN-AUGUSTE-DOMINIQUE INGRES",
    Date: "(1780-1867)",
    Desc: "Ingres was the most prominent disciple of the most famous neoclassicist painter, Jacques Louis David, and a master of classic portrait.",
  },
];

let erase = [];
erase = [
  "DIEGO VELÁZQUEZ",
  "CLAUDE MONET",
  "MICHELANGELO MERISI DA CARAVAGGIO",
  "JOSEPH-MALLORD WILLIAM TURNER",
  "ÉDOUARD MANET",
  "HENRI MATISSE",
  "JACKSON POLLOCK",
  "DOMENIKOS THEOTOKOPOULOS · EL GRECO",
  "EDVARD MUNCH",
  "TIZIANO VECELLIO DI GREGORIO",
  "FRANCIS BACON",
  "ANDY WARHOL",
  "SIR PETER PAUL RUBENS",
  "JOAN MIRÓ",
  "TOMMASO MASACCIO",
  "PIET MONDRIAN",
  "KAZIMIR MALEVICH",
  "GERHARD RICHTER",
  "MARCEL DUCHAMP",
  "SANDRO BOTTICELLI",
  "EDWARD HOPPER",
  "PAUL KLEE",
  "MARC CHAGALL",
  "JEAN-ANTOINE WATTEAU",
  "SALVADOR DALÍ",
  "WILLEM DE KOONING",
  "DAVID HOCKNEY",
  "MAX ERNST",
  "JASPER JOHNS",
  "DUCCIO DA BUONINSEGNA",
  "ROGER VAN DER WEYDEN",
  "JACQUES-LOUIS DAVID",
  "GIORGIO BARBARELLI DA CASTELFRANCO",
  "THEODORE GÉRICAULT",
  "JEAN-BAPTISTE CAMILLE COROT",
  "GEORGES BRAQUE",
  "BERTHE MARIE PAULINE MORISOT",
  "JAMES ABBOT MCNEILL WHISTLER",
  "JEAN.FRANÇOIS MILLET",
  "ÉLISABETH-LOUISE VIGÉE LE BRUN",
  "RENÉ MAGRITTE",
  "CIMABUE",
  "PIERRE-AUGUSTE RENOIR",
  "ROY LICHTENSTEIN",
  "WILLIAM-ADOLPHE BOUGUEREAU",
  "GIORGIO DE CHIRICO",
  "FERNAND LÉGER",
  "JEAN-AUGUSTE-DOMINIQUE INGRES",
];
console.log("end", erase);

const final = data.filter((item) => erase.includes(item.Artist) === false);

export default final;
