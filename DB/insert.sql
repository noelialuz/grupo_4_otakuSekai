
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
value("Dragon ball Z"); /* OK */
insert into series(description)
value("Naruto"); /* OK */
insert into series(description)
value("Evangelion");/* DEBERÍA SER: Jujutsu Kaisen */
insert into series(description)
value("Full Metal Alchemist"); /* DEBERÍA SER: Boku No Hero */
insert into series(description)
value("Tsukihime"); /* SACARLO */
insert into series(description)
value("Super Campeones"); /* SACARLO */
insert into series(description)
value("Pokemon"); /* OK */
insert into series(description)
value("Princesa Mononoke"); /* DEBERÍA SER: Demon Slayer */
insert into series(description)
value("Los Alcones Galacticos"); /* SACARLO */
insert into series(description)
value("Mi Vecino Totoro"); /* OK */
insert into series(description)
value("Supernatural"); /* DEJARLO PARA MOSTRAR LA VISTA: not-found */
insert into series(description)
value("The Boys"); /* DEJARLO PARA MOSTRAR LA VISTA: not-found */
insert into series(description)
value("Otros"); /* OK */ 


insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Franco", "Franco", 33333333,"brunomaiorano@gmail.com",  "Pasaje Mozart 1079",1,"1522233333",'2022-06-17',"$2a$10$//e3GIq0Cs4JoZoi2hgk4OIU.GPrQXr7qQu3kUk3z0eTkbBBfqExu","../img/avatars/1656108129026_img.jpg",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("None", "None", 34666887,"noelia_luz_fernandez@hotmail.com",  "qweqeqe 123",1,"11117777",'1991-09-24',"$2a$10$tD1Zew7gyHY7IHWLdzOrue4dkO66kJImKsRQAqmKYje9ICEHo1PlC","../img/avatars/1656901557982_img.png",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Renzo", "Aquino", 37687532,"renzo_aquino_1993@hotmail.com",  "Bouchard",1,"01168925247",'1993-07-12',"$2a$10$mie6nSfOIrHyCY7aKMps3.lCn7DO2zpAISi.a0JUzSeNsWmAMRoqG","../img/avatars/1657229069387_img.jpg",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Jhoxani", "Diaz", 95342250,"jdiaz@digitalhouse.com",  "Gavilan 45",1,"1137684987",'2000-08-21',"$2a$10$1Z66D.LZLf22LToXlgKTJuATVYaCTHuRF4/ZTBHMN8akQiAXXKBtO","../img/avatars/1659565481708_img.png",2);
insert into users (first_name, last_name, dni, email,address, country_id, phone, birthday, password, avatar, profile_id)
values("Franco", "Gomez", 33241657,"FrancoGomez@hotmail.com",  "San lorenzo 720",1,"01168925247",'1993-07-12',"$2a$10$mie6nSfOIrHyCY7aKMps3.lCn7DO2zpAISi.a0JUzSeNsWmAMRoqG","../img/avatars/1657229069387_img.jpg",1);
/* CONTRASEÑA PARA USUARIO COMÚN: 1234567 */


insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Taza Mágica Goku", 5, 1, 1500,0, "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.", "/img/productos/1/taza1.png", 0, 10);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Taza Mágica Dragon Ball Z", 5, 1, 1500, 20, "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.", "/img/productos/2/taza2.png", 0, 10);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Llavero Totoro varios modelos", 6, 7, 690, 10, "Llavero totoro excelente calidad. El material es de PVC. El precio es por unidad. Altura 8 cm. Ancho 4 cm. Incluye gancho","/img/productos/3/llavero3.png",0, 50);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Peluche Llavero Pokemon Go", 6, 5, 780,0, "Peluches Pokemon excelente calidad. El precio es por unidad. En la lista desplegable de variantes figuran las opciones disponibles. Altura 12 cm. Excelente calidad","/img/productos/4/llavero4.png", 0, 2);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Prendedores Pins Demon Slayer Nezuko", 7, 6,75,0,"Prendedores Pins Demon Slayer Nezuko. Excelente calidad. Diseño a elección", "/img/productos/5/pin5.png", 0,100);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Aros Naruto Shippuden Aldea De La Hoja Naruto Metal", 7,2,55,0,"Modelo: naruto shippuden. Material: Metal. Formato de venta: pack por 2 unidades","/img/productos/6/aros6.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Piece Luffy Boundman",4,10,4700,0,"Figura de Plástico. Alto 25 cm. Desmontable. Incluye base. Producto original" , "/img/productos/7/figura7.jpg" ,0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Figura de acción Marvel Hombre Araña", 4, 10, 4750, 0,"Las figuras de acción están hechas de pvc, plástico lo que asegura que sean amables y suaves al tacto, diferenciando las distintas texturas y relieves del cuerpo de los personajes. Juguetes articulados. Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida." ,"/img/productos/8/figura8.png" , 0, 1);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Muñeco Pokemon Battle Charizard Deluxe", 4,5, 5200, 15, "Figura Pokemon Battle Feature Figure Charizard Deluxe Action. Original de Jazwares","/img/productos/9/figura9.png" ,0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Remera Algodón Naruto", 2,2, 5200, 5, "Remera de Algodón. Estampado de Vinilo Textil calidad premium. Remeras con diseños exclusivos de Naruto. Talle unico","/img/productos/19/indumentaria19.png" ,0, 30);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Figura de acción Naruto Shippuden Itachi Uchiha", 6, 2, 9000,20, "Bandai es una de las mayores empresas representantes de la cultura animé en Japón. Con sus juguetes y figuras de acción es una de las preferidas por los más pequeños y por quienes se dedican a coleccionar. Las figuras de acción están hechas de plástico lo que asegura que sean amables y suaves al tacto, diferenciando las distintas texturas y relieves del cuerpo de los personajes. Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida.", "/img/productos/10/figura10.png", 0, 4);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Juguete Dragon Ball Z Gogeta Super Saiyan Blue", 6, 1, 3200,15, "Nuevo en blister. No son articulados. Medidas 18x5x4 aproximadamente. Son importados", "/img/productos/11/figura11.png", 0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Juguete Dragon Ball Z Vegeta Super Saiyan Fase Dios", 6, 1, 3200,10, "Nuevo en blister. No son articulados. Medidas 18x5x4 aproximadamente. Son importados", "/img/productos/12/figura12.png", 0, 3);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Poster Jujutsu Kaisen En Lona O Vinilo Impreso", 3, 3, 1100, 5, "Gigantografia en Lona Vinílica Impresa a color. Medida: 100 x 56 cm (1 x 0,56 metros). Material: Lona Vinílica (resistente al agua y luz solar). Duración: En exteriores dura varios meses sin perder el color. En interiores el tiempo es indefinido, si no lo toca nadie puede durar toda la vida, solo trabajamos con materiales de primera calidad.", "/img/productos/13/posters13.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Poster Boku No Hero En Lona O Vinilo Impreso", 3, 4, 900, 0, "Gigantografia en Lona Vinílica Impresa a color. Medida: 100 x 56 cm (1 x 0,56 metros). Material: Lona Vinílica (resistente al agua y luz solar). Duración: En exteriores dura varios meses sin perder el color. En interiores el tiempo es indefinido, si no lo toca nadie puede durar toda la vida, solo trabajamos con materiales de primera calidad.", "/img/productos/14/posters14.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Lona De Uzumaki Naruto", 3, 2, 950, 0, "Lona de Naruto para colgar. Medida: 30x80cm. Material: Lona front full color.", "/img/productos/15/posters15.png", 0, 10);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Pokemon - Cuadros Personalizados - Todos Los Personajes", 3, 5, 1700, 10, "Lámina sobre bastidor sin marco. Tamaño: 20cm x 30cm. Imagen a elección. Se puede personalizar para colgarlo de manera vertical u horizontal.","/img/productos/16/cuadro16.png", 0, 4);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Cuadros Poster Pokemon Eevee Evolucion 60x90 (suv 5)", 3, 5, 1950, 0, "Lámina sobre bastidor sin marco. Tamaño: 20cm x 30cm. Imagen a elección. Se puede personalizar para colgarlo de manera vertical u horizontal.","/img/productos/17/cuadro17.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Remera Algodón Anime Otaku Manga Todas Las Series Hombre", 2, 10, 1950, 0, "Remera de Algodón Peinado 24.1 de excelente calidad. Estampado de Vinilo Textil calidad premium. Contamos con varios modelos! - Consultanos por el que estás buscando. Tabla de Medidas: Talle 1/S: 63 x 48 cm; Talle 1/S: 63 x 48 cm; Talle 3/L: 69 x 52 cm; Talle 4 /XL: 72 x 54 cm; Talle 5/XXL: 75 x 58 cm", "/img/productos/18/indumentaria18.png", 0, 15);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Remera Algodón Naruto", 2, 2, 2550, 10,  "Remera de Algodón. Estampado de Vinilo Textil calidad premium. Remeras con diseños exclusivos de Naruto. Tabla de Medidas: Talle 1/S: 63 x 48 cm; Talle 1/S: 63 x 48 cm; Talle 3/L: 69 x 52 cm; Talle 4 /XL: 72 x 54 cm; Talle 5/XXL: 75 x 58 cm", "/img/productos/19/indumentaria19.png", 0, 15);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Pantalon Pokemon Pikachu Charmander Bulbasor Squirtle", 2, 5, 3200, 15, "Pantalón unisex de Pokemon confeccionado en Tela de Poliéster. Cómodos y livianos. Bolsillos Laterales y bolsillo trasero (lado derecho). Presentación en bolsa acordonada porta pantalón.","/img/productos/20/indumentaria20.png", 0, 9);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Campera Demon Slayer Anime Diseño Exclusivo", 2, 6, 3900, 5, "Camperitas con diseños exclusivos. Confeccionado en ketten frisado (temporada intermedia) con sublimado full print. El ketten es una tela cuya composición es polyester.","/img/productos/21/indumentaria21.png", 0, 5);
insert into products(name,category_id, serie_id, price, discount, description, image, deleted, stock)
values("Manga Pokemon Yellow Editorial Panini Dgl Games & Comics", 1, 5, 800, 0, "Han pasado dos años desde que Red y sus amigos derrotaron al Equipo Rocket en Silph S.A. Bruno, un miembro del Alto Mando, lanzó un reto para Red. Él salió a enfrentar el desafío con valentía, pero desapareció. Pikachu fue el único que regresó pero sus heridas son graves. Yellow tomó a Pikachu bajo su cuidado y partió en busca de Red.", "/img/productos/22/manga22.png", 0, 10);