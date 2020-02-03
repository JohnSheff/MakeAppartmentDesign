// const dataBase = {
//   srcPlint: [
//     {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/curved_white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140048Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=53543a52261c55f54f2cebbcd91393a206ded25d320a074a9d744d49dbcafe0b',
//       zIndex: 8,
//       title: 'Рельефный плинтус 100мм',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/curved_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T135958Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=425b8d836927ccef5928b9a02563bf9cec92272081a7c1f86905aa9df91fa484',
//       price: 462,
//       href: 'https://www.terrem.ru/product/arbiton_paint_it_mp0601/',
//       descript: 'Древесно-волокнистый плинтус под покраску Aberhof'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/flat_transparent.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140113Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=4fb2226349834842650874a504a636b1755b6c112fe3478fa99a5c3437f096eb',
//       zIndex: 8,
//       title: 'В цвет стен',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/flat_transparent.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140137Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=2402a25a3c6edb5a5650ea7d6579ee564ca0236152cf8f863f43db799efd3f9a',
//       price: 462,
//       href: 'https://www.terrem.ru/product/arbiton_paint_it_mp0601/',
//       descript: 'Древесно-волокнистый плинтус Aberhof высотой 60мм, окрашенный в цвет стен'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/flat_white_small.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140203Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=390e5bfccfe20effa4207e21c5659cdc3a2a67d767f0ef28199d1421ea810a66',
//       zIndex: 8,
//       title: 'Плоский плинтус 60мм',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/flat_white_small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140218Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=da1c5bb81f2445cd2a9b448a7b0766cb9137a644098102ba15d111018caf7da4',
//       price: 327,
//       href: 'https://www.terrem.ru/product/aberhof_art_601_art601/',
//       descript: 'Древесно-волокнистый плинтус под покраску'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/flat_white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140231Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=0ed6b683921636e79113400b205be94681a4c6d7fd2fb29b88f4c89be8f5f109',
//       zIndex: 8,
//       title: 'Плоский плинтус 100мм',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/flat_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140239Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=94448e10c953e3827fba00ca4e18fb1326ef36e500e18ed9568f7a1195ee0f4c',
//       price: 375,
//       href: 'https://www.terrem.ru/product/aberhof_art_801_art801/',
//       descript: 'Древесно-волокнистый плинтус под покраску Aberhof'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/high_white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140306Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7f2feab1a8d4b442e4a0bed30c42227d60814950e4460530554c05df4ca47bb9',
//       zIndex: 8,
//       title: 'Плоский плинтус 120мм',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/high_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140329Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=595100e6aa258c44647bf4b1ada8c5b83b2252fc14e06c35606901ae418694bf',
//       price: 461,
//       href: 'https://www.terrem.ru/product/aberhof_art_1001_art1001/',
//       descript: 'Древесно-волокнистый плинтус под покраску'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/plint/profil_doors_brown.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140346Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8b8d8f136b7a49c4160abb8b4d045311fe23a166caccd360ea305f3667cdf0e4',
//       zIndex: 8,
//       title: 'Плоский плинтус под дерево 80мм',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/plint/profil_doors_brown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140354Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=71da198bdfd34e97281f391b5ab124e724d7e61159ba2bfa2165bd12682aa205',
//       price: 640,
//       href: 'https://www.terrem.ru/product/plintus_falquon_canyon_andiroba_d2913/',
//       descript: 'Плинтус из эко-шпона ProfilDoors'
//     }
//   ],
//
//   sill: [
//     {
//       img: 'https://play.min.io/makeapp/room/sill/black_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140916Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=96a1b9941f52f955b387f1bc838c20861faf775a5283c44a98c9aee6f0540c47',
//       zIndex: 8,
//       title: 'Деревянный, черный',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/black_wood.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140900Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8da6353b635ca0827b57aea090b93e08884edf22a3125f977e19be9182bbe3dc',
//       price: 750,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/chernyiy_satin',
//       descript: 'Шлифованный, обработанный масловоском OSMO Черное'
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/sill/dark_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140941Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c888afa7641696b732b3fdd3feec5a632769bfb72c6f78e1adaf49b49b534fbd',
//       zIndex: 8,
//       title: 'Деревянный, темный',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/dark_wood.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T140932Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a6457fea853ec9fe9f795592a148bb6f512e0c5aa554f462831cdd574ab0b5a3',
//       price: 500,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/venge_mat#content',
//       descript: 'Шлифованный, обработанный масловоском OSMO Венге'
//     }, {
//       img: 'https://play.min.io/makeapp/room/sill/ginger_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141042Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8c5c1caaa4a1260de70346ff349104466d758aeb8c57336824cbbef51218c115',
//       zIndex: 8,
//       title: 'Деревянный, орех',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/ginger_wood.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141028Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=9eb4ad8fbf7a467bcdd1d602ca1f59dffdd430ba19b2ff4a46e257ba74f37cee',
//       price: 700,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/oreh_matovyiy#content',
//       descript: 'Шлифованный, обработанный масловоском OSMO Орех'
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/sill/light_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141104Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=93db94bf39e418a53bcfc64c393b00fa870712b43493581d275ff95ca2ada745',
//       zIndex: 8,
//       title: 'Деревянный, светлый',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/light_wood.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141052Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cb3e63a772ebb96424b2ec19cd33d065177fcca12edc23a769d216b048d14d2a',
//       price: 500,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/svetlyiy_dub_mat#content',
//       descript: 'Шлифованный, обработанный масловоском OSMO Бук Дымчатый'
//     }, {
//       img: 'https://play.min.io/makeapp/room/sill/middle_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141125Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=dd41f6ed7d9bc8719aff9881741378a656fcc92dfca093cccf77d8bccef123f3',
//       zIndex: 8,
//       title: 'Деревянный, полуночный',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/middle_wood.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141114Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=d6c8b44d28334f9522489341e734ccd849d70f0b54275ae846168c222d00887c',
//       price: 500,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/zolotoy_dub_mat#content',
//       descript: 'Шлифованный, обработанный масловоском OSMO Янтарь'
//     }, {
//       img: 'https://play.min.io/makeapp/room/sill/plastic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141141Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=241a98b2dd964c76c7c0d2d3dfaebbe3656493ac039f081db88cf7c4e05b7b75',
//       zIndex: 8,
//       title: 'Пластиковый',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/sill/plastic.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141134Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b12a6c7f53da7d0ae332c351080eac087e481ad87153bce7405a87d25c1b930e',
//       price: 657,
//       href: 'https://podokonnik.msk.ru/catalog/katalog/belyiy_mat#content',
//       descript: 'Стандартный подоконник ПВХ, белый'
//     }
//   ]
// ,
//   light: [
//     {
//       img: 'https://play.min.io/makeapp/room/light/lightstar_rullo_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141227Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6a7744d45af796871f73d04ebd45ab88bf5d1fb5dda290b4332d7c2730d320b7',
//       zIndex: 9,
//       title: 'Lightstar Rullo Чёрный',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/lightstar_rullo_black.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141215Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c13918bb2efdc3f8d7bc30d45cafaf82277f787d2d1bc057638cc40dbf61bfdf',
//       price: 932,
//       href: 'https://www.eseolight.ru/catcbsi/potolochnye_svetilniki/lightstar/spotlights/rullo_214487/',
//       descript: 'Точечные светильники. Диаметр 6см'
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/light/lightstar_rullo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141250Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=af00f543adcee013bb77b79ed7a75072afdc2c5d369f33214ccf6c483f35d356',
//       zIndex: 9,
//       title: 'Lightstar Rullo',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/lightstar_rullo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141240Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=fe6d3d9fa46243891c882f1357f7062452ab39d7c2e00ef6840b4bbb0d47a094',
//       price: 1252,
//       href: 'https://www.eseolight.ru/catcbsi/potolochnye_svetilniki/lightstar/spotlights/rullo_216486/',
//       descript: 'Точечные светильники. Диаметр 6см'
//     }, {
//       img: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141310Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5d2cf37d308ed2748ef47eb78ace14654ea3a9e65930aa5c32d03fd5c1efe5c5',
//       zIndex: 9,
//       title: 'Lightstar Singo',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/lightstar_singo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141259Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ab0ca07abdaa5345b8753ba07965b03912b6588f5ec304ffe2b0cd5862462892',
//       price: 1473,
//       href: 'https://svetilnik-online.ru/svetilnik-tochechnyj-lightstar-singo-x2-011612',
//       descript: 'Люстры LED и точечные светильники'
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/light/lightstar_unitario_black_tablet.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141336Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=47696a5df1de79bc2d1c606e8cde3e2d5ee6b569e44c2cc1e694c0aa847f9a8f',
//       zIndex: 9,
//       title: 'Lightstar Unitario Чёрный / Tablet',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/lightstar_unitario_black_tablet.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141329Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=9f12bdeed5051461fda634198fa921339b1124860ce5ab8be9b5fac36937fe11',
//       price: 10357,
//       href: 'https://lightstarshop.ru/catalog/bra/bra_lightstar_763690.html',
//       descript: 'Люстры LED и точечные светильники'
//     }, {
//       img: 'https://play.min.io/makeapp/room/light/lightstar.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141401Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=dee9ffbba3f56f7d3ac9d0451f3d92cac0e13d0e9416a78c1c77d17dab963531',
//       zIndex: 9,
//       title: 'Lightstar Tablet',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/lightstar.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141354Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=9b0cd116408d0ab46eee01ed1f162b4aa53a45fb94a455ef6637933ccea358ec',
//       price: 243,
//       href: 'https://lightstarshop.ru/catalog/vstraivaemye/vstraivaemyy_svetilnik_lightstar_gx53_tablet_white_212110.html',
//       descript: 'Точечные светильники. Диаметр 11см'
//     }, {
//       img: 'https://play.min.io/makeapp/room/light/melody.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141418Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=bc26528d98d6b17213e15523c89bcc76990edd1cef4519256f81f0e2a34f8077',
//       zIndex: 9,
//       title: 'IKEA Melody',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/light/melody.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141410Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7daa24951a655d9cc28bf9993a4ae1bf5dbc88eaa1008157ec1a9319a154d54f',
//       price: 799,
//       href: 'https://www.ikea.com/ru/ru/p/melodi-podvesnoy-svetilnik-belyy-80386545/',
//       descript: 'Стандартный светильник или установка ваших люстр'
//     }
//   ]
// ,
//   molding: [
//     {
//       img: 'https://play.min.io/makeapp/room/molding/molding_simple.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141534Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b776f3037c608f44355313cb611c55dd2bb99d0a85798cca62d60c2c3c61949a',
//       zIndex: 9,
//       title: 'Резная галтель',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/molding/molding_simple.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141522Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=4131231cb16177eadf086aec19aba9a1465e4ac1991cf13d23d15b138fb34554',
//       price: 40,
//       href: 'https://koldvor.ru/catalog/stroimaterialy/pogonaj/plintus/galtel-plintus-potolochnyi-lipa-1530',
//       descript: 'ПВХ галтель высотой 30мм'
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/molding/molding_small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141546Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a0ad833ee3c4404122afa1bbe743794c93cf872dd7ae886f3ce3e2038fb10cf6',
//       zIndex: 9,
//       title: 'Незаметная галтель',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/molding/molding_small.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141558Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=314dee0e38a5e6adf2afbc11bb5b1a8c206345cbb9902b53e57cbce396bce874',
//       price: 40,
//       href: 'https://koldvor.ru/catalog/stroimaterialy/pogonaj/plintus/plintus-reznoi-sort-e-58-mm',
//       descript: 'Стандартный элемент натяжного потолка'
//     }
//   ]
// ,
//   elecric: [
//     {
//       img: 'https://play.min.io/makeapp/room/electric/legrand.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141653Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=55c27bfc4c53451ec773d19562b31a793559026841a2001601f7769f648bc141',
//       zIndex: 9,
//       title: 'Legrand Etika (Франция)',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/electric/legrand.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141639Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=5c2fab44ee86f548066c745b1f9b1547859b7f9150f264bee81970c099fd5267',
//       price: 150,
//       href: 'https://www.legrand2.ru/shop_legrand_672221.html',
//       descript: ''
//     },
//
//     {
//       img: 'https://play.min.io/makeapp/room/electric/legrand_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141711Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b9f2200aedbd4f2136879cdef2af6d086912e3408b681a4ad1f0bcc327989e0b',
//       zIndex: 9,
//       title: 'Legrand Etika Black (Франция)',
//       id: null,
//       sampleImage: 'https://play.min.io/makeapp/room/electric/legrand_black.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141702Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c8fe59139ea2086c21f730769d284a36d557dd739ae345bb5c3ea30c3870f861',
//       price: 230,
//       href: 'https://www.legrand2.ru/shop_show_752040.html',
//       descript: ''
//     }
//   ]
// ,
//   colorWall: [
//     {background: 'rgb(246, 243, 234)', title: 'F503'}, {
//       background: 'rgb(233, 234, 222)',
//       title: 'F450'
//     }, {background: 'rgb(232, 228, 223)', title: 'Y481'}, {
//       background: 'rgb(225, 219, 220)',
//       title: 'Y426'
//     }, {background: 'rgb(216, 221, 226)', title: 'F490'}, {
//       background: 'rgb(220, 221, 219)',
//       title: 'G499'
//     }, {background: 'rgb(226, 218, 213)', title: 'F483'}, {
//       background: 'rgb(248, 235, 193)',
//       title: 'G304'
//     }, {background: 'rgb(219, 223, 225)', title: 'G500'}, {
//       background: 'rgb(233, 222, 215)',
//       title: 'F474'
//     }, {background: 'rgb(229, 221, 212', title: 'G484'}, {
//       background: 'rgb(217, 214, 206)',
//       title: 'G487'
//     }, {background: 'rgb(208, 210, 204)', title: 'H495'}, {
//       background: 'rgb(203, 213, 217)',
//       title: 'Y396'
//     }, {background: 'rgb(207, 207, 210)', title: 'G488'}, {
//       background: 'rgb(198, 203, 211)',
//       title: 'G489'
//     }, {background: 'rgb(195, 202, 206)', title: 'J500'}, {
//       background: 'rgb(231, 210, 188)',
//       title: 'H470'
//     }, {background: 'rgb(207, 211, 198)', title: 'G444'}, {
//       background: 'rgb(219, 208, 208)',
//       title: 'H501'
//     }, {background: 'rgb(217, 206, 194)', title: 'H485'}, {
//       background: 'rgb(185, 188, 187)',
//       title: 'K496'
//     }, {background: 'rgb(182, 194, 196)', title: 'X438'}, {
//       background: 'rgb(202, 196, 187)',
//       title: 'H486'
//     }, {background: 'rgb(185, 191, 196)', title: 'K498'}, {
//       background: 'rgb(228, 210, 167)',
//       title: 'H456'
//     }, {background: 'rgb(179, 187, 193)', title: 'K500'}, {
//       background: 'rgb(171, 181, 166)',
//       title: 'L494'
//     }, {background: 'rgb(168, 172, 183)', title: 'K489'}, {
//       background: 'rgb(185, 181, 173)',
//       title: 'V487'
//     }, {background: 'rgb(191, 180, 165)', title: 'V484'}, {
//       background: 'rgb(183, 171, 169)',
//       title: 'V481'
//     }, {background: 'rgb(165, 179, 194)', title: 'J490'}, {
//       background: 'rgb(152, 167, 173)',
//       title: 'V438'
//     }, {background: 'rgb(181, 164, 145)', title: 'K484'}, {
//       background: 'rgb(167, 167, 161)',
//       title: 'M497'
//     }, {background: 'rgb(217, 206, 194)', title: 'K488'}, {
//       background: 'rgb(146, 155, 147)',
//       title: 'V444'
//     }, {background: 'rgb(137, 157, 163)', title: 'L491'}, {
//       background: 'rgb(154, 144, 132)',
//       title: 'S486'
//     }, {background: 'rgb(137, 146, 154)', title: 'N500'}, {
//       background: 'rgb(137, 138, 136)',
//       title: 'L499'
//     }, {background: 'rgb(129, 144, 158)', title: 'M490'}, {
//       background: 'rgb(117, 137, 155)',
//       title: 'S435'
//     }, {background: 'rgb(113, 135, 143)', title: 'S438'}, {
//       background: 'rgb(131, 134, 107)',
//       title: 'L447'
//     }, {background: 'rgb(129, 138, 129)', title: 'N494'}, {
//       background: 'rgb(151, 133, 121)',
//       title: 'V467'
//     }, {background: 'rgb(116, 123, 131)', title: 'S500'}, {
//       background: 'rgb(97, 118, 142)',
//       title: 'S431'
//     }, {background: 'rgb(68, 114, 108)', title: 'N370'}, {
//       background: 'rgb(93, 106, 118)',
//       title: 'V490'
//     }, {background: 'rgb(110, 98, 87)', title: 'N485'}, {
//       background: 'rgb(67, 88, 118)',
//       title: 'N434'
//     }, {background: 'rgb(115, 74, 68)', title: 'M476'}, {
//       background: 'rgb(80, 83, 86)',
//       title: 'Y500'
//     }, {background: 'rgb(95, 100, 115)', title: 'M428'}, {background: 'rgb(71, 84, 79)', title: 'N442'}
//   ]
// ,
//   srcSample: [
//     {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/darkcherry.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141802Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cfd1473b3ba8a82c90fda87874bf7da4a32b1ebf1af286254137725864f47434',
//       zIndex: 1,
//       title: 'Доска темной вишни лакированная',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/darkcherry.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141815Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=57e3771363246077f598ce9734e7b0bef269fa7fee147035618cad8a1d84d786',
//       price: 1295,
//       href: 'https://www.ostmarket.ru/laminat/571/5619/',
//       descript: 'Quick-Step Perspective UF865. Размеры: 138х15,6х0,95см. Класс 32. Влагостойкий. 4 V-образные фаски.'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/darkchocolate.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141828Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c7d3b1c03137b439957ecce3955301d0dfb97e234e429defc34f9f0b0910b111',
//       zIndex: 2,
//       title: 'Шоколад темный',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/darkchocolate.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141840Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8741dd397e5ca129ecc5b67a471d2e0cc946e6cc0178d31e63a4f0dd8ead7cce',
//       price: 860,
//       href: 'https://allam.ru/laminat-quick-step-dub-tyomnyj-shokolad-cxp088-12313?utm_source=market&utm_term=12313&_openstat=bWFya2V0LnlhbmRleC5ydTvQm9Cw0LzQuNC90LDRgiBRdWljay1TdGVwICjQmtCy0LjQuiDRgdGC0LXQvykgQ0xJWEZMT09SIFBMVVMg0JTRg9CxINGC0ZHQvNC90YvQuSDRiNC-0LrQvtC70LDQtCBDWFAwODggMzIg0LrQu9Cw0YHRgSA4INC80Lw7YU1HbHFOckZWd25SbVdPc3d1bzZXZzs',
//       descript: 'Quick-Step Clixfloor Plus CXP 088 Темный Шоколад. Размеры: 120х19х0,8см. Класс 32. 4-х сторонние фаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/dubbordo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141859Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=0fe9425da4c4261b9f8dd388920725a66c9efa5025fedbf957ba8b22e066f008',
//       zIndex: 1,
//       title: 'Дуб бордо',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/dubbordo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141909Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=919d082dd31aa21051eb7eb05c9f0fa994d66088634452d287d81856f9aaefe9',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/2294/71766/',
//       descript: 'Quick-Step Impressive IM1995. Размеры: 138х19х0,8см. Класс 32. Влагостойкий. 4 V-образные фаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/dublight.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141923Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=fa69d9046013f5714e40ba2aa23198c403ae355a79005da9a9b577a4a22ea48e',
//       zIndex: 2,
//       title: 'Дуб светлый',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/dublight.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141934Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=d405c2b758fd2b91dfc04c979602c1a2ee332dff4d1f38833b970a8bc0d39a3e',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/2294/926228/',
//       descript: 'Quick-Step Impressive IM1847. Размеры: 138х19х0,8см. Класс 32. Влагостойкий. 4 V-образные фаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/dublightgrey.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T141953Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6239c83794d9998f0c9bc6d7548c0865ff7f71553e862fd112e7904730dc416d',
//       zIndex: 2,
//       title: 'Доска дуба фантазийного светло-серого',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/dublightgrey.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142004Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7b5792b1398617f2f81c2dd3a7868d9932c69f4ef4f309cc081b8b101c870e21',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/2294/177375/',
//       descript: 'Quick-Step Impressive IM3560. Размеры: 138х19х0,8см. Класс 32. Влагостойкий. 4 V-образные фаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/dubmount.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142020Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=2de2d4b78e5923b837e2d7dd544b2810ad50ab92ee7f8b8d77f67db56613e3fe',
//       zIndex: 2,
//       title: 'Дуб горный коричневый',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/dubmount.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142040Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7c00725a2b945115c8c15bb8d7d434af43391584412ea22ca8ff736f441cb2b4',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/2294/71759/',
//       descript: 'Quick-Step Classic CLM4091. Дуб горный коричневый. Размеры: 120х19х0,8см. Класс 32. Микрофаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/dubwhite.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142103Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=26ef2701ddfa652afc41c5d4780d7ed631ca4bd4062e8d423c10866fb344c8c0',
//       zIndex: 2,
//       title: 'Доска белого дуба лакированная',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/dubwhite.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142118Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cfad640b573b75b2d7c77d4bdd369c01672b024d9065fd4a8171a629619cdb7a',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/2294/71767/',
//       descript: 'Quick-Step Impressive IM3105. Размеры: 138х19х0,8см. Класс 32. Влагостойкий. 4 V-образные фаски'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/floor/klennatural.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142129Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=03e6539a3d7b2c10ea29452552b0c7a72087d9c51625b24fde1940116e08b1e8',
//       zIndex: 2,
//       title: 'Клен натуральный',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/floor/klennatural.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142138Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=afadab3754dbb263b45676884c0c52bdb5b22f56362ad3f25fa49e91d2de1a02',
//       price: 1300,
//       href: 'https://www.ostmarket.ru/laminat/571/8492/',
//       descript: 'Quick-Step Perspective UF862. Размеры: 138х15,6х0,95см. Класс 32. Влагостойкий. 4 V-образные фаски'
//     }
//   ]
// ,
//   srcDoor: [
//     {
//       sampleImage: 'https://play.min.io/makeapp/room/door/dg-nyuta-graphite.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142510Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=f72c51a835e5b1531665167c59d7a3e932e1db9e5f18db16639af678b8ab7156',
//       zIndex: 1,
//       title: 'ВФД Ньюта ДГ, графит',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/dg-nyuta-graphite.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142518Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=f2e788513e7eb4bb40df99cd567299bc9a35127dbc6df88e766700c0f66601cc',
//       price: 20000,
//       href: 'https://vfd.ru/catalog/interior-doors/mezhkomnatnaya-dver-nyuta-dg/',
//       descript: 'Плоское глухое полотно темно-серого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/dg-nyuta-white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142534Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=789175ecb66204c71f69163c02859ec7d1517e75908da8062329a7ebd3b4e9f2',
//       zIndex: 1,
//       title: 'ВФД Ньюта ДГ, белая',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/dg-nyuta-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142545Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=38054ff50d713387b2041f1c2b5b3f5e63884596695bb6ce6d998d0ad8151418',
//       price: 15000,
//       href: 'https://vfd.ru/catalog/interior-doors/mezhkomnatnaya-dver-nyuta-dg/',
//
//       descript: 'Плоское глухое полотно белого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/dorren-white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142602Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=aac2cb95f5ed8aa81d6e3526f0f31953f2132906df69739d8f47713e4b9fa437',
//       zIndex: 1,
//       title: 'ВФД Доррен, белая',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/dorren-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142610Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fe4cba991ccc1b18122afeda238f0f3b040386ed20f20f1fbc610b79e262b8c',
//       price: 18000,
//       href: 'https://vfd.ru/catalog/interior-doors/mezhkomnatnaya-dver-dorren-dg/',
//
//       descript: 'Полотно с филенками белого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/glanta-grey.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142626Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=07656caa5f8faa15cdb4817d42d7ef2ec185e9801b9dce1f42a437d3f8e53fb9',
//       zIndex: 1,
//       title: 'ВФД Гланта, темно-серая',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/glanta-grey.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142636Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c0b4cb94049f7e050d2e206689fd770327e1a06ebaa333859ada804fcdf4c520',
//       price: 19000,
//       href: 'https://vfd.ru/catalog/interior-doors/stockholm-tsvetnye-dveri-pokrytye-emalyu/mezhkomnatnaya-dver-glanta-dg/',
//
//       descript: 'Полотно с филенками темно-серого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/glanta-light-grey.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142647Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=683b3dba6ee73a0d8c3fe3f05ba4c94ef9ca913b97a5f3bce2ec5c2ad120e2c4',
//       zIndex: 1,
//       title: 'ВФД Гланта, светло-серая',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/glanta-light-grey.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142655Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ad4fcdaf99dae749921a832cbb04424c1d009ffe497e7ef28f207b508e6ddd4f',
//       price: 17000,
//       href: 'https://vfd.ru/catalog/interior-doors/stockholm-tsvetnye-dveri-pokrytye-emalyu/mezhkomnatnaya-dver-glanta-dg/',
//
//       descript: 'Полотно с филенками светло-серого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/glanta-white.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cf4aa685e523500fe3e586f6be920a3a72435a43e782425fec3e44ec3b3ad1fd',
//       zIndex: 1,
//       title: 'ВФД Гланта, белая',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/glanta-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142721Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=4c683891797e0cb410618674df75c1ec5502617bb007e4f64d9ad8d90ddf9ccd',
//       price: 16000,
//       href: 'https://vfd.ru/catalog/interior-doors/stockholm-tsvetnye-dveri-pokrytye-emalyu/mezhkomnatnaya-dver-glanta-dg/',
//
//       descript: 'Полотно с филенками белого цвета'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/profildoors_1vg.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142733Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a27317701f6c33db5d1d3197a07ee0612cf12e7a0f7e6f54de089b54bcc99d0d',
//       zIndex: 1,
//       title: 'Profil Doors 1VG (Россия)',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/profildoors_1vg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142741Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=889d9a27ec447f2b40ead031531fd0d02b6a39841c00bcdcab96af2ebc89b4d9',
//       price: 27515,
//       href: 'https://xn--b1adbdpavwdfjcfo3b8i.xn--p1ai/item_mdv__profildoors_profilvg____0_26431.html',
//
//       descript: 'Черная матовая дверь. Клееный массив хвойных пород дерева и MDF'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/profildoors_1z.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142751Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8a0adae38e1370dc552130f5cb02f3424b726a665a2812ff7eb02222a82b089b',
//       zIndex: 1,
//       title: 'Profil Doors 1Z (Россия)',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/profildoors_1z.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142759Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=af0b41f437bcacf98a20eea150026db08ab12bbb7b2fed4b2dee9150908c75af',
//       price: 8602,
//       href: 'https://xn--b1adbdpavwdfjcfo3b8i.xn--p1ai/item_mdv__profildoors_profilz____0_25631.html',
//
//       descript: 'Клееный массив хвойных пород дерева и MDF. Кромка полотна двери изготовлена из алюминия'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/profildoors_u100_antracite.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142809Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=9ad2325c1561b487e319229b78366894ae41c5bd49e92340f02d6792ac7ffd2b',
//       zIndex: 1,
//       title: 'Profil Doors U100 Антрацит (Россия)',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/profildoors_u100_antracite.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142819Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ffd7a2ea363f21685e13bffe11639866fc1b91f89a1d98a2289f627e82989842',
//       price: 8050,
//       href: 'https://dveri-profil-doors.ru/products/u-100-antracit',
//
//       descript: 'Глухая МДФ дверь с филенками'
//     }, {
//       sampleImage: 'https://play.min.io/makeapp/room/door/profildoors_u100_black.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142840Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=964daf90f483ea78922e09ddd5329ebd8d3839821f36334e6e821c59cdef7756',
//       zIndex: 1,
//       title: 'Profil Doors U100 Чёрный (Россия)',
//       id: null,
//       img: 'https://play.min.io/makeapp/room/door/profildoors_u100_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T142848Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=3c82e3b33a0b72ec3e0e421d99d6fa7f7bb2aff5fafef4dc7c026fe8bf2a919f',
//       price: 6426,
//       href: 'https://dveri-profil-doors.ru/products/u1-chernaya-matovaya',
//
//       descript: 'Глухая МДФ дверь с филенками'
//     }
//   ]
// ,
//   preset: [
//     {
//       title: 'Cold Caramel',
//       img: 'https://play.min.io/makeapp/preset/cold-caramel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143038Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=046377ff2f5056e5101fd210dd2a2b6b4d5f6a181089adb9e848d6aa804720db',
//       floor: 'https://play.min.io/makeapp/preset/cold-caramel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143038Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=046377ff2f5056e5101fd210dd2a2b6b4d5f6a181089adb9e848d6aa804720db',
//       light: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143232Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6c94150b3b8d33b6f142d96f67431ec278d997967693cc982b5c81c13aa1088a',
//       door: 'https://play.min.io/makeapp/room/door/glanta-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143302Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a10aaf9808f09c57c7e04e1e0862fde9568d0c1bc7279f092769c1cc3a6b62e3',
//       elecric: 'https://play.min.io/makeapp/room/electric/legrand.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143344Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=28e348df21d88fe98a7d6291f514725b5065a91ff2d56936d1f7b4c941b7b007',
//       molding: 'https://play.min.io/makeapp/room/molding/molding_small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143429Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=3017d5870781b9561651c30df939460b75e8f686bdee31c71de429288038c31c',
//       srcPlint: 'https://play.min.io/makeapp/room/plint/flat_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143457Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=51e5685c34efc86340b1e58cce248ee9955edefa8f1dd3594f777f57723ed611',
//       background: 'rgb(191, 180, 165)',
//       floorBath: 'https://play.min.io/makeapp/bath/kerama_floor/kerama_prostone_dark.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143549Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=964f91d6616d03a70d01ea73640996f4cc085aa31d64025b12753561cf75f6fa',
//       keramaWall: 'https://play.min.io/makeapp/bath/kerama_wall/kerama_belkanto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143615Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=d73391a802e6b4eed52f8b28dd2c9aaa8db6cf51a32ff6d345413c0b3aa5eb5e',
//       toilet: 'https://play.min.io/makeapp/bath/toilet/roca_gap.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143642Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=336baafb4607c20782ec3247723deb07e7ecea2c5db837416fd86e4faefb3b92',
//       bath: 'https://play.min.io/makeapp/bath/bath/cersanit_octavia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fc7227953c497483574a029daa6f076ca12ff6c796a94f3bbd7553bd8d76fc1',
//       locker: 'https://play.min.io/makeapp/bath/locker/locker_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143740Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=af596989d26aae96cf521cec06aa57db9525e9a36c093808af693aa02e714447'
//     },
//
//     {
//       title: 'Peach Dreams',
//       img: 'https://play.min.io/makeapp/preset/peach-dreams.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143758Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=f799303a41c438db8cc99c9f2d81745b14703bc79c84b50ecfcab239577f575f',
//       floor: 'https://play.min.io/makeapp/preset/cold-caramel.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143038Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=046377ff2f5056e5101fd210dd2a2b6b4d5f6a181089adb9e848d6aa804720db',
//       light: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143232Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6c94150b3b8d33b6f142d96f67431ec278d997967693cc982b5c81c13aa1088a',
//       door: 'https://play.min.io/makeapp/room/door/profildoors_1z.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143915Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=bb655bb27297430d104413fcce0fa72b23d823eecdb43651c8b34ac74fb5293c',
//       elecric: 'https://play.min.io/makeapp/room/electric/legrand_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143942Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=17ec0091f3d51ce8e8e428a0b0a5e17fac48aae3628790c0ece85c7d904ab329',
//       molding: 'https://play.min.io/makeapp/room/molding/molding_small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143429Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=3017d5870781b9561651c30df939460b75e8f686bdee31c71de429288038c31c',
//       srcPlint: 'https://play.min.io/makeapp/room/plint/flat_transparent.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144006Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=24aaded91dc4cfb85975714ee3b40ab06385ad840876224d3c4baec48c0410ba',
//       background: 'rgb(233, 222, 215)',
//       floorBath: 'https://play.min.io/makeapp/bath/kerama_floor/kerama_fregat_beige.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144056Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=2c38c3c35696616e311fa91294e78115490d05bad437a37857500df0b58ac2cf',
//       keramaWall: 'https://play.min.io/makeapp/bath/kerama_wall/kerama_belkanto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143615Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=d73391a802e6b4eed52f8b28dd2c9aaa8db6cf51a32ff6d345413c0b3aa5eb5e',
//       toilet: 'https://play.min.io/makeapp/bath/toilet/cersanit_parva.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144128Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=032f298b6a9cfe2ee70e92efe75c77f3f024851656bc4106f4ed1c039aec95c9',
//       bath: 'https://play.min.io/makeapp/bath/bath/cersanit_octavia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fc7227953c497483574a029daa6f076ca12ff6c796a94f3bbd7553bd8d76fc1',
//       locker: 'https://play.min.io/makeapp/bath/locker/locker_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144156Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b4bd8ced22b81c85dade5edb67d100978f54a629ee8c9d3404437d69526a027f'
//     }, {
//       title: 'Excuisite  Classics',
//       img: 'https://play.min.io/makeapp/preset/exquisite-classic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144229Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ac38f0e0e41ecb5768b0d00f694e95664e2616c6d963a0b2e283a1111f13a009',
//       floor: 'https://play.min.io/makeapp/preset/exquisite-classic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144229Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=ac38f0e0e41ecb5768b0d00f694e95664e2616c6d963a0b2e283a1111f13a009',
//       light: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143232Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6c94150b3b8d33b6f142d96f67431ec278d997967693cc982b5c81c13aa1088a',
//       door: 'https://play.min.io/makeapp/room/door/glanta-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144349Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=51e05f2e75ae4d2a1329ce1d1e670c027988499e6bf58084ba1d95f7bdf11670',
//       elecric: 'https://play.min.io/makeapp/room/electric/legrand.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143344Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=28e348df21d88fe98a7d6291f514725b5065a91ff2d56936d1f7b4c941b7b007',
//       molding: 'https://play.min.io/makeapp/room/molding/molding_simple.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144426Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=441548a06c65ead3681f06b30d786dbde0ad02f60d3fddcff0bc0762e29c784c',
//       srcPlint: 'https://play.min.io/makeapp/room/plint/high_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144500Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=86118e5136d568f46ad3ed001a86e236e91dbcf47edb6d71678e03181b5a629a',
//       background: 'rgb(116, 123, 131)',
//       floorBath: 'https://play.min.io/makeapp/bath/kerama_floor/kerama_prostone_dark.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143549Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=964f91d6616d03a70d01ea73640996f4cc085aa31d64025b12753561cf75f6fa',
//       keramaWall: 'https://play.min.io/makeapp/bath/kerama_wall/kerama_prostone_avellino_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144527Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=df0e3036893e66889a4946578bb9a3584bf7eb9f562148c9fe07b11aaed590a4',
//       toilet: 'https://play.min.io/makeapp/bath/toilet/cersanit_parva.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144128Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=032f298b6a9cfe2ee70e92efe75c77f3f024851656bc4106f4ed1c039aec95c9',
//       bath: 'https://play.min.io/makeapp/bath/bath/cersanit_octavia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fc7227953c497483574a029daa6f076ca12ff6c796a94f3bbd7553bd8d76fc1',
//       locker: 'https://play.min.io/makeapp/bath/locker/locker_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144156Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b4bd8ced22b81c85dade5edb67d100978f54a629ee8c9d3404437d69526a027f'
//     }, {
//       title: 'Vivaro Alpine',
//       img: 'https://play.min.io/makeapp/preset/vivaro-alpine.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144550Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=e44aa6b6c6d005b6dc6920a7e6174fa060ff10ce39c724642262b6d89d5c3fc9',
//       floor: 'https://play.min.io/makeapp/room/floor/dublight.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144651Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=d04e24c3e3aa21f8aefa9c54ae8d7aea2d27a68b95155f2b372ce94d61398fd9',
//       light: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143232Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6c94150b3b8d33b6f142d96f67431ec278d997967693cc982b5c81c13aa1088a',
//       door: 'https://play.min.io/makeapp/room/door/dorren-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144721Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=2cb7dd54ac0106a956446cb68e773a50e4e70d0a5696ac49be83af320bd61be6',
//       elecric: 'https://play.min.io/makeapp/room/electric/legrand.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143344Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=28e348df21d88fe98a7d6291f514725b5065a91ff2d56936d1f7b4c941b7b007',
//       molding: 'https://play.min.io/makeapp/room/molding/molding_simple.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144426Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=441548a06c65ead3681f06b30d786dbde0ad02f60d3fddcff0bc0762e29c784c',
//       srcPlint: 'https://play.min.io/makeapp/room/plint/curved_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144753Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=54e18392c6e7fcbce0d7b0a39a343dddd391cec87e6d3abba50ce0c288a25f3b',
//       background: 'rgb(179, 187, 193)',
//       floorBath: 'https://play.min.io/makeapp/bath/kerama_floor/kerama_fregat_dark.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144824Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a13d15e427a2eebe93548bca57ee976bd023575265286e0b02b04374cc412909',
//       keramaWall: 'https://play.min.io/makeapp/bath/kerama_wall/kerama_prostone_avellino_black.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144527Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=df0e3036893e66889a4946578bb9a3584bf7eb9f562148c9fe07b11aaed590a4',
//       toilet: 'https://play.min.io/makeapp/bath/toilet/cersanit_parva.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144128Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=032f298b6a9cfe2ee70e92efe75c77f3f024851656bc4106f4ed1c039aec95c9',
//       bath: 'https://play.min.io/makeapp/bath/bath/cersanit_octavia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fc7227953c497483574a029daa6f076ca12ff6c796a94f3bbd7553bd8d76fc1',
//       locker: 'https://play.min.io/makeapp/bath/locker/locker_wood.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144156Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b4bd8ced22b81c85dade5edb67d100978f54a629ee8c9d3404437d69526a027f'
//     }, {
//       title: 'Elegant White',
//       img: 'https://play.min.io/makeapp/preset/elegant-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144602Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=dc1b9ce312c652e53be1f7026a1a073ab0a738d537b2e9ee3fdd6149e21a740f',
//       floor: 'https://play.min.io/makeapp/room/floor/dubwhite.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144932Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=b17542c51a0e6da578af5f3a55bf10fa15bf13a433eca7c9def47f322da9270f',
//       light: 'https://play.min.io/makeapp/room/light/lightstar_singo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143232Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=6c94150b3b8d33b6f142d96f67431ec278d997967693cc982b5c81c13aa1088a',
//       door: 'https://play.min.io/makeapp/room/door/glanta-white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144349Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=51e05f2e75ae4d2a1329ce1d1e670c027988499e6bf58084ba1d95f7bdf11670',
//       elecric: 'https://play.min.io/makeapp/room/electric/legrand.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143344Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=28e348df21d88fe98a7d6291f514725b5065a91ff2d56936d1f7b4c941b7b007',
//       molding: 'https://play.min.io/makeapp/room/molding/molding_small.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143429Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=3017d5870781b9561651c30df939460b75e8f686bdee31c71de429288038c31c',
//       srcPlint: 'https://play.min.io/makeapp/room/plint/flat_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143457Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=51e5685c34efc86340b1e58cce248ee9955edefa8f1dd3594f777f57723ed611',
//       background: 'rgb(246, 246, 246)',
//       floorBath: 'https://play.min.io/makeapp/bath/kerama_floor/kerama_fregat_dark.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T144824Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=a13d15e427a2eebe93548bca57ee976bd023575265286e0b02b04374cc412909',
//       keramaWall: 'https://play.min.io/makeapp/bath/kerama_wall/kerama_kaleidoskop_white_beige.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T145003Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=671a6b2b94534c9f10523b2ef5b74832bf90c418d89210e7f0bb295e7b6552fc',
//       toilet: 'https://play.min.io/makeapp/bath/toilet/roca_gap.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143642Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=336baafb4607c20782ec3247723deb07e7ecea2c5db837416fd86e4faefb3b92',
//       bath: 'https://play.min.io/makeapp/bath/bath/cersanit_octavia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143708Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=8fc7227953c497483574a029daa6f076ca12ff6c796a94f3bbd7553bd8d76fc1',
//       locker: 'https://play.min.io/makeapp/bath/locker/locker_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=Q3AM3UQ867SPQQA43P2F%2F20200129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200129T143740Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=af596989d26aae96cf521cec06aa57db9525e9a36c093808af693aa02e714447'
//     }
//   ]
// };
//
// ;module.exports = {dataBase};