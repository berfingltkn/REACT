import React from 'react'
import BurgerBackImage from '../assets/burger-background.jpg';
import '../styles/About.css';
export const About=()=> {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{ backgroundImage: `url(${BurgerBackImage})` }}
      ></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>
        Merhaba! Biz Burger Şirketi olarak lezzetli ve doyurucu burgerler sunan bir restoranız. Misyonumuz, müşterilerimize kaliteli malzemelerle hazırlanan enfes burgerler sunmak ve onların damak zevkine hitap etmek. Şirketimiz, yıllardır burger severlere unutulmaz deneyimler yaşatmayı hedeflemektedir.

Burgerlerimizi özel olarak seçilen taze ve doğal malzemelerle hazırlıyoruz. Kasap Burgerlerimiz, en kaliteli etlerle özenle hazırlanırken, sebzelerimiz ve soslarımız da taptaze ve lezzetli olması için özenle seçilir. Ayrıca, sağlıklı seçeneklere de önem veriyor ve vejetaryen veya glutensiz burgerler gibi özel talepleri karşılayacak seçenekler sunuyoruz.

Müşteri memnuniyeti bizim için en önemli önceliklerden biridir. Hem lezzetli yemekler sunarak hem de dostane ve profesyonel hizmet anlayışıyla müşterilerimize unutulmaz bir deneyim sunmak için çalışıyoruz. Restoranımızda sıcak ve samimi bir ortamda aile ve arkadaşlarınızla keyifli vakit geçirebilirsiniz.

Burger Şirketi olarak, lezzetli burgerlerimizle sizleri buluşturmak için sabırsızlanıyoruz. Sizleri restoranımıza bekliyoruz ve doyurucu bir burger deneyimi yaşatmak için elimizden gelenin en iyisini yapacağımızdan emin olabilirsiniz.

Teşekkür ederiz,


        </p>
      </div>
    </div>
  )
}

export default About
