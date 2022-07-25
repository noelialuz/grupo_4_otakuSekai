
insert into countries(description)
values("Argentina");
insert into countries(description)
values("Chile");
insert into countries(description)
values("Brasil");
insert into countries(description)
values("Perú");
insert into countries(description)
values("Mexico");
insert into countries(description)
values("Estados Unidos");
insert into countries(description)
values("España");
insert into countries(description)
values("Panama");
insert into countries(description)
values("Paraguay");
insert into countries(description)
values("Uruguay");

insert into categories(description)
values("Mangas");
insert into categories(description)
values("Indumentaria");
insert into categories(description)
values("Posters");
insert into categories(description)
values("Figuras");
insert into categories(description)
values("Tazas");
insert into categories(description)
values("Llaveros");
insert into categories(description)
values("Otros");

insert into profiles(description)
values("Comprador");
insert into profiles(description)
values("Administrador");

insert into series(description)
value("Dragon ball Z");
insert into series(description)
value("Naruto");
insert into series(description)
value("Evangelion");
insert into series(description)
value("Full Metal Alchemist");
insert into series(description)
value("Tsukihime");
insert into series(description)
value("Super Campeones");
insert into series(description)
value("Pokemon");
insert into series(description)
value("Princesa Mononoke");
insert into series(description)
value("Los Alcones Galacticos");
insert into series(description)
value("Mi Vecino Totoro");
insert into series(description)
value("Supernatural");
insert into series(description)
value("The Boys");
insert into series(description)
value("Otros");


insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Franco", "Franco", 33333333,"brunomaiorano@gmail.com",  "Pasaje Mozart 1079",1,"1522233333",'2022-06-17',"$2a$10$//e3GIq0Cs4JoZoi2hgk4OIU.GPrQXr7qQu3kUk3z0eTkbBBfqExu","1656108129026_img.jpg",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("None", "None", 34666887,"noelia_luz_fernandez@hotmail.com",  "qweqeqe 123",1,"11117777",'1991-09-24',"$2a$10$tD1Zew7gyHY7IHWLdzOrue4dkO66kJImKsRQAqmKYje9ICEHo1PlC","1656901557982_img.png",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Renzo", "Aquino", 37687532,"renzo_aquino_1993@hotmail.com",  "Bouchard",1,"01168925247",'1993-07-12',"$2a$10$mie6nSfOIrHyCY7aKMps3.lCn7DO2zpAISi.a0JUzSeNsWmAMRoqG","1657229069387_img.jpg",2);

insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Taza Mágica Goku", 5, 1, 1500,0, "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.", "/img/productos/1/taza1.png", 0, 10);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Taza Mágica Dragon Ball Z", 5, 1, 1500, 20, "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.", "/img/productos/2/taza2.png", 0, 10);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Llavero Totoro varios modelos", 6, 13, 690, 10, "Llavero totoro excelente calidad. El material es de PVC. El precio es por unidad. Altura 8 cm. Ancho 4 cm. Incluye gancho","/img/productos/3/llavero3.png",0, 50);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Peluche Llavero Pokemon Go", 6, 7, 780,0, "Peluches Pokemon excelente calidad. El precio es por unidad. En la lista desplegable de variantes figuran las opciones disponibles. Altura 12 cm. Excelente calidad","/img/productos/4/llavero4.png", 0, 2);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Prendedores Pins Demon Slayer Nezuko", 7, 13,75,0,"Prendedores Pins Demon Slayer Nezuko. Excelente calidad. Diseño a elección", "/img/productos/5/pin5.png", 0,100);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Aros Naruto Shippuden Aldea De La Hoja Naruto Metal", 7,2,55,0,"Modelo: naruto shippuden. Material: Metal. Formato de venta: pack por 2 unidades","/img/productos/6/aros6.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Piece Luffy Boundman",4,13,4700,0,"Figura de Plástico. Alto 25 cm. Desmontable. Incluye base. Producto original" , "/img/productos/7/figura7.jpg" ,0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Figura de acción Marvel Hombre Araña", 4, 13, 4750, 0,"Las figuras de acción están hechas de pvc, plástico lo que asegura que sean amables y suaves al tacto, diferenciando las distintas texturas y relieves del cuerpo de los personajes. Juguetes articulados. Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida." ,"/img/productos/8/figura8.png" , 0, 1);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Muñeco Pokemon Battle Charizard Deluxe", 4,7, 5200, 15, "Figura Pokemon Battle Feature Figure Charizard Deluxe Action. Original de Jazwares","/img/productos/9/figura9.png" ,0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Remera Algodón Naruto", 2,2, 5200, 5, "Remera de Algodón. Estampado de Vinilo Textil calidad premium. Remeras con diseños exclusivos de Naruto. Talle unico","/img/productos/19/indumentaria19.png" ,0, 30);