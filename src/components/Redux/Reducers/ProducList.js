const initProductState={
    products: [
        { id: 1, name: 'silla de ruedas', price: 1200, image:'https://hergom-medical.com/cdn/shop/products/SilladeruedasS150BHandydealtacalidad_1800x1800.jpg?v=1674761483' },
        { id: 2, name: 'Andadera', price: 800, image:'https://acdn-us.mitiendanube.com/stores/817/326/products/jl913l-71-06f17af503e8743dd716149523268433-1024-1024.jpg' },
        { id: 3, name: 'Bolsas para esterilizar', price: 150, image:'https://www.dentalmex.mx/wp-content/uploads/2021/07/Bolsas-para-esterilizar-de-la-marca-Uniseal.-Deposito-Dental-Dentalmex.jpg' },
        { id: 4, name: 'Rodillera', price: 300, image:'https://http2.mlstatic.com/D_NQ_NP_2X_770285-MLM81507482480_012025-F-rodillera-para-recuperacion-de-lesiones-acl-mcl-pcl.webp' },
        { id: 5, name: 'guantes', price: 70, image:'https://i0.wp.com/plus.odontologybg.com/wp-content/uploads/2020/10/UNI01-Guantes-Nitrilo-UniSeal-PORTADA.png?fit=1024%2C1012&quality=80&ssl=1' },
        { id: 6, name: 'cubrebocas', price: 50, image:'https://depositodentxpress.com/wp-content/uploads/2021/08/cubrebocas-unimask-uniseal.png' },
        { id: 7, name: 'dique dental', price: 200, image:'https://dentool.com.mx/wp-content/uploads/2021/03/DIQUEDEHULE1.png' },
        { id: 8, name: 'Vasos desechables', price: 90, image:'https://dentiprime.com.mx/cdn/shop/files/VasosDentales.png?v=1731001723&width=1214' },
        { id: 9, name: 'eyectores dentales', price: 250, image:'https://www.tododental.com.mx/cdn/shop/files/092-BL.jpg?v=1694463307' },
        { id: 10, name: 'Campo dental', price: 40, image:'https://http2.mlstatic.com/D_NQ_NP_647902-MLM53449837200_012023-O-campo-dental-desechable-color-azul-uniseal-pq125-piezas.webp' },
      ]
}

const productsReducer=(state=initProductState,action)=>{
    return state;
}

export default productsReducer;