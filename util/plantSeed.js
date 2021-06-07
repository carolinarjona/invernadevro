require("dotenv").config();

const { LIGHT_LEVEL } = require("../util/constants");
const { DIFFICULTY } = require("../util/constants");
const { WATERING_FREQUENCY } = require("../util/constants");
const Plant = require("../models/Plant");

const plants = [
  {
    name: "Albahaca",
    botanical_name: "Ocimum basilicum",
    info: "La albahaca es de poco tamaño y sus hojas son alargadas de unos 3 a 5 cm, las cuales son de color verde bien brillante, y textura suave. Es una hierba que infunde un aroma y un sabor a las comidas muy característico, además de aportar una gran variedad de nutrientes que proporcionan beneficios para la salud de nuestro organismo.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.DAILY,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/Albahaca_zo4jhf.png",
  },
  {
    name: "Aloe Vera",
    botanical_name: "Aloe Vera",
    info: "El aloe vera o 'sábila' es una de las 250 especies de aloe conocidas en el mundo y crece sobre todo en desiertos y zonas semidesérticas. De hojas largas y carnosas, en su interior contiene un potente gel que, como veremos, se utiliza especialmente en productos cosméticos.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/AloeVera_kp69c3.png",
  },
  {
    name: "Areca",
    botanical_name: "Dypsis lutescens",
    info: "La areca es una planta muy popular, ya que aporta a cualquier espacio en que se ubique ese aire tropical tan único de las palmeras. Son también muy apreciadas por su capacidad de eliminar las toxinas del aire, por lo que resultan una de las mejores plantas de interior que se pueden tener en casa.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/Areca_sebj9g.png",
  },
  {
    name: "Bambú de la suerte",
    botanical_name: "Dracaena sanderiana",
    info: "El bambú de la suerte es una planta ornamental con tallos delgados y flexibles (similar a una caña) con hojas en forma de cinta que crecen como plantas de sotobosque en las selvas tropicales.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623081409/Invernadevro-Plant/Bambu_t7mcny.png",
  },
  {
    name: "Bonsái",
    botanical_name: "Bonsai",
    info: "Un bonsái es un árbol, arbusto o planta que se cultiva mediante la técnica que recibe el mismo nombre. Los bonsáis no son plantas genéticamente enanas, de hecho, cualquier especie arbórea puede ser usada para formar uno de ellos. El objetivo final es crear una representación miniaturizada pero realista de una parte de la naturaleza.",
    difficulty: DIFFICULTY.EXPERT,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063242/Invernadevro-Plant/Bonsai_isbqpg.png",
  },
  {
    name: "Cactus",
    botanical_name: "Cactaceae",
    info: "Los cactus se caracterizan por acumular agua y nutrientes en sus tejidos, así, pueden adaptarse sin problema al hábitat en el que se encuentren. La mayoría de los cactus, defienden esas reservas de agua a toda costa y lo hacen desarrollando unas espinas. Existen muchos tipos y variedades.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.BIWEEKLY,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/Cactus_gvqoj5.png",
  },
  {
    name: "Calathea",
    botanical_name: "Calathea",
    info: "Las calateas son plantas tropicales que se caracterizan por el diseño natural de sus hojas, las cuales se pliegan por la noche y vuelven a desplegarse durante el día. Las distintas variedades de esta especie adoptan diferentes tamaños, formas y tonalidades a cuál más espectacular.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/Calathea_wcxaae.png",
  },
  {
    name: "Cinta",
    botanical_name: "Chlorophytum comosum",
    info: "La cinta es una planta de porte colgante muy fácil de reproducir y cuidar, con unas hojas largas y muy luminosas. Son ideales para decorar cuartos de baño o cocinas ya que adoran la humedad. La cinta desarrolla en las hojas unos estolones y unas diminutas flores de color blanco.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Cinta_qowgkc.png",
  },
  {
    name: "Clavel",
    botanical_name: "Dianthus caryophyllus",
    info: "El clavel es una flor muy utiliza para ramos y, sobre todo, es todo un icono de la cultura española. Es una planta con una amplia variedad de colores.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Clavel_yr8olz.png",
  },
  {
    name: "Girasol",
    botanical_name: "Helianthus annuus",
    info: "El girasol es una planta de gran tamaño. Es una planta de duración anual, por lo cual crecerá rápidamente, florecerá, dará sus frutos y morirá.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Girasol_jshlqi.png",
  },
  {
    name: "Helecho común",
    botanical_name: "Nephrolepis exaltata",
    info: "El helecho común, originario de las zonas tropicales de América del Sur, se caracteriza por su frondosidad y su pasión por el agua, a cambio regula la humedad del ambiente ofreciendo un aire más fresco y sano.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Helecho_hjkdv6.png",
  },
  {
    name: "Hierbabuena",
    botanical_name: "Mentha spicata",
    info: "La hierbabuena, también conocida como menta, es una de las plantas aromáticas más comunes en los hogares. Se caracteriza por tener unas hojas verdes brillantes muy aromáticas, ligeramente serradas, opuestas y llenas de sabor que, dependiendo de la variedad, cambian de intensidad.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.DAILY,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Hierbabuena_s3n1hh.png",
  },
  {
    name: "Lavanda",
    botanical_name: "Lavandula",
    info: "La lavanda es un tipo de arbusto que se reconoce rápidamente por su característico color púrpura y violáceo, así como por su olor tan característico. Se ha utilizado para el tratamiento de diferentes enfermedades como la ansiedad, las migrañas o el insomnio.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.BIWEEKLY,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063239/Invernadevro-Plant/Lavanda_d3sopc.png",
  },
  {
    name: "Lengua de tigre",
    botanical_name: "Sansevieria",
    info: "La lengua de trigre es una planta crasa y perenne. Sus hojas, fuertes y coriáceas (es decir, con una textura parecida a la del cuero), recuerdan a espadas, y crecen de tal manera que conforman una roseta. Son de color verde vivo, acompañado de líneas amarillentas, y por su carácter perenne mantienen el mismo aspecto durante todo el año.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.BIWEEKLY,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Sansevieria_ei1hy9.png",
  },
  {
    name: "Monstera",
    botanical_name: "Monstera deliciosa",
    info: "La monstera es una planta muy común que se caracteriza por poseer unas grandes hojas verdes partidas como si de costillas se tratase. Crea tallos flexibles ya que en realidad es una planta trepadora que requiere soportes para mantenerse erguida.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Monstera_r2voti.png",
  },
  {
    name: "Orquídea",
    botanical_name: "Orchidaceae",
    info: "Las orquídeas se caracterizan por ser flores con formas complejas, además de tener un sistema de reproducción llamativo para las abejas y los hongos.",
    difficulty: DIFFICULTY.EXPERT,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Orquidea_fks0yk.png",
  },
  {
    name: "Palma Kentia",
    botanical_name: "Howea forsteriana",
    info: "La palma kentia es un árbol originario de Australia que se adapta a cualquier clima. Puede crecer hasta 12 metros, pero si se mantiene en una maceta alcanzará cuando mucho 3 metros.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.BIWEEKLY,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/PalmaKentia_flslza.png",
  },
  {
    name: "Planta del dinero",
    botanical_name: "Plectranthus verticillatus",
    info: "La planta del dinero es una planta con aspecto colgante, de hojas verde intenso que puede vivir tanto dentro como fuera de casa. Su resistencia como planta de interior hace que sea muy atractiva a la hora de decorar el hogar.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/PlantaDinero_szdrd4.png",
  },
  {
    name: "Poto",
    botanical_name: "Epipremnum aureum",
    info: "El poto es una planta trepadora del bosque tropical con hojas verdes teñidas con dibujos de color crema. Estas hojas, cuando la planta está reptando por el bosque en busca de una guía o soporte para trepar, son de tamaño pequeño, pero cuando lo consiguen y comienzan a trepar, las hojas aumentan de tamaño.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Poto_klfinw.png",
  },
  {
    name: "Romero",
    botanical_name: "Salvia rosmarinus",
    info: "El romero crece en una mata de hoja perenne corredera que alcanza una extensión de 1,5 m. Sus flores normalmente son de un azul pálido, pero se cultivan numerosas variedades que van del blanco al cereza y aparecen en verano. Se pueden escarchar y usar en pastelería.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Romero_ovlpu4.png",
  },
  {
    name: "Rosa",
    botanical_name: "Rosa",
    info: "La rosa, o en su defecto los rosales, pertenece a la familia de las rosáceas. Podemos encontrar alrededor de 100 especies de rosas diferentes, procedentes de las zonas templadas del Hemisferio Norte. La mayoría de las especies de rosa se cultivan como flores ornamentales, pero también para la extracción de aceite esencial usado en cosmética, perfumería, gastronomía y medicina.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.DAILY,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/Rosa_dtafvm.png",
  },
  {
    name: "Tomillo",
    botanical_name: "Thymus",
    info: "El tomillo es una planta aromática que se usa como condimento en el norte de África y el Mediterráneo. Pero más allá de su función culinaria, esta hierba también tiene propiedades medicinales que combaten cólicos, dolores de estómago o gases, entre otras cosas.",
    difficulty: DIFFICULTY.INTERMEDIATE,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.BIWEEKLY,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063242/Invernadevro-Plant/Tomillo_bfap9v.png",
  },
  {
    name: "Tronco de Brasil",
    botanical_name: "Dracaena fragrans",
    info: "El tronco de Brasil, como su propio nombre indica, es originario de Brasil. Sus hojas están matizadas en distintos tonos de verde y, según va creciendo, pierde las hojas inferiores dejando desnudo un tallo robusto muy decorativo.",
    difficulty: DIFFICULTY.BEGINNER,
    light_level: LIGHT_LEVEL.MEDIUM,
    watering_frequency: WATERING_FREQUENCY.ONCE_A_WEEK,
    pet_friendly: 0,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063240/Invernadevro-Plant/TroncoBrasil_rihak2.png",
  },
  {
    name: "Venus atrapamoscas",
    botanical_name: "Dionaea muscipula",
    info: "La venus atrapamoscas es una planta carnívora. Su nombre común hace referencia a su hábito alimenticio de atrapar presas vivas, principalmente insectos y arácnidos.",
    difficulty: DIFFICULTY.EXPERT,
    light_level: LIGHT_LEVEL.BRIGHT,
    watering_frequency: WATERING_FREQUENCY.TWICE_A_WEEK,
    pet_friendly: 1,
    plant_image_path:
      "https://res.cloudinary.com/carolveloper/image/upload/v1623063241/Invernadevro-Plant/VenusAtrapamoscas_ghgg5d.png",
  },
];

Plant.bulkCreate(plants).then(() => console.log("data inserted"));
