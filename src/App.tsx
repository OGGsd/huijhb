import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('sv');

  const translations = {
    sv: {
      title: 'AXIE STUDIO',
      tagline: 'Professionella digitala lösningar',
      products: 'PRODUKTER',
      back: 'TILLBAKA',
      allProducts: 'ALLA PRODUKTER',
      takeOffer: 'TAKE OFFER',
      comingSoon: 'KOMMER SNART',
      demoTitle: 'Demo: Färdigbyggd Hemsida + App (iOS & Android) för Företag – Endast för Ägaren',
      demoIntro: 'Vi erbjuder en färdig hemsida och app (för både Apple & Android) skapad som en demoversion för redan existerande företag – t.ex. "Viking Salong".',
      demoWarning: 'OBS! Detta är en demo och vi äger inte företaget eller varumärket. Produkten är endast tillgänglig för den riktiga ägaren av verksamheten.',
      whatWeOffer: 'Vad vi erbjuder:',
      offer1: 'En komplett, mobilvänlig hemsida',
      offer2: 'En fullt fungerande mobilapp (iOS & Android)',
      offer3: 'Integrerat bokningssystem och företagsfunktioner',
      offer4: 'Instruktioner för att koppla egen domän',
      offer5: 'Publicering av appen under ert namn',
      offer6: 'Möjlighet att anpassa färger, logotyp och texter till ert varumärke',
      howItWorks: 'Så fungerar det:',
      step1: 'Endast den verkliga ägaren köper produkten',
      step2: 'Vi kontaktar er direkt för att verifiera ägarskap',
      step3: 'Ni får instruktioner och vi hjälper er att lansera hemsidan och appen',
      step4: 'Allting anpassas för er verksamhet',
      important: 'Viktigt:',
      important1: 'Detta är en demo för presentationssyfte – alla rättigheter ges vidare till det faktiska företaget vid köp.',
      important2: 'Om du är företagets ägare men inte vill synas på vår plattform, vänligen kontakta oss så tar vi bort materialet omedelbart.',
      productInfo: 'Information om våra produkter:',
      productInfo1: 'Alla produkter är färdiga lösningar för befintliga företag',
      productInfo2: 'Endast den verkliga företagsägaren kan köpa respektive produkt',
      productInfo3: 'Vi verifierar ägarskap innan leverans'
    },
    en: {
      title: 'AXIE STUDIO',
      tagline: 'Professional digital solutions',
      products: 'PRODUCTS',
      back: 'BACK',
      allProducts: 'ALL PRODUCTS',
      takeOffer: 'TAKE OFFER',
      comingSoon: 'COMING SOON',
      demoTitle: 'Demo: Ready-made Website + App (iOS & Android) for Businesses – Owner Only',
      demoIntro: 'We offer a ready-made website and app (for both Apple & Android) created as a demo version for existing businesses – e.g. "Viking Salong".',
      demoWarning: 'NOTE! This is a demo and we do not own the business or trademark. The product is only available to the actual owner of the business.',
      whatWeOffer: 'What we offer:',
      offer1: 'A complete, mobile-friendly website',
      offer2: 'A fully functional mobile app (iOS & Android)',
      offer3: 'Integrated booking system and business functions',
      offer4: 'Instructions for connecting your own domain',
      offer5: 'Publishing the app under your name',
      offer6: 'Ability to customize colors, logo and texts to your brand',
      howItWorks: 'How it works:',
      step1: 'Only the actual owner purchases the product',
      step2: 'We contact you directly to verify ownership',
      step3: 'You receive instructions and we help you launch the website and app',
      step4: 'Everything is customized for your business',
      important: 'Important:',
      important1: 'This is a demo for presentation purposes – all rights are transferred to the actual company upon purchase.',
      important2: 'If you are the business owner but do not want to appear on our platform, please contact us and we will remove the material immediately.',
      productInfo: 'Information about our products:',
      productInfo1: 'All products are ready-made solutions for existing businesses',
      productInfo2: 'Only the actual business owner can purchase each product',
      productInfo3: 'We verify ownership before delivery'
    }
  };

  const t = translations[language];

  const products = [
    {
      name: 'Viking Salong Package',
      link: 'https://axiestudio-1.invoicing.co/client/invoice/Opnel5aKBz-q7n0nzVXPEeCxZLG1dFY84jhzIJ6iAhl',
      available: true
    },
    { name: 'Affes Salong', available: false },
    { name: 'Fem Fem 6', available: false },
    { name: 'Alltid Salong', available: false },
    { name: 'Mrbarbershop', available: false },
    { name: 'Barberaria96', available: false },
    { name: 'The Barberman', available: false },
    { name: 'Samos Barbershop', available: false },
    { name: 'Boba Milk Tea', available: false }
  ];

  const HomePage = () => (
    <>
      {/* Demo Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-white p-8 border-2 border-black">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-black"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-black"></div>
            
            <h2 className="text-2xl font-bold mb-6">
              {t.demoTitle}
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              {t.demoIntro}
            </p>
            
            <div className="bg-black text-white p-4 mb-6">
              <p className="font-semibold">
                {t.demoWarning}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">{t.whatWeOffer}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer1}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer2}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer3}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer4}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer5}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.offer6}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">{t.howItWorks}</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                    <span>{t.step1}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                    <span>{t.step2}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                    <span>{t.step3}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                    <span>{t.step4}</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="border-2 border-black p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-4">{t.important}</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <div className="w-4 h-4 border-2 border-black mr-3 mt-1 flex-shrink-0"></div>
                  <span>{t.important1}</span>
                </p>
                <p className="flex items-start">
                  <div className="w-4 h-4 border-2 border-black mr-3 mt-1 flex-shrink-0"></div>
                  <span>{t.important2}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const ProductsPage = () => (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative mb-12">
          <button 
            onClick={() => setCurrentPage('home')}
            className="mb-6 text-black hover:bg-black hover:text-white px-4 py-2 border-2 border-black transition-all duration-300"
          >
            {t.back}
          </button>
          <h2 className="text-3xl font-bold mb-2">{t.allProducts}</h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative">
              <div className="bg-white border-2 border-black p-6 h-full flex flex-col">
                <div className="absolute top-2 right-2 w-3 h-3 bg-black"></div>
                <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
                
                <div className="mt-auto">
                  {product.available && product.link ? (
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-black text-white px-6 py-3 hover:bg-white hover:text-black border-2 border-black transition-all duration-300 font-semibold"
                    >
                      {t.takeOffer}
                    </a>
                  ) : (
                    <div className="w-full text-center bg-gray-200 text-gray-600 px-6 py-3 border-2 border-gray-300 font-semibold">
                      {t.comingSoon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-black p-8 bg-gray-50">
          <h3 className="text-xl font-bold mb-4">{t.productInfo}</h3>
          <div className="space-y-3">
            <p className="flex items-start">
              <div className="w-4 h-4 border-2 border-black mr-3 mt-1 flex-shrink-0"></div>
              <span>{t.productInfo1}</span>
            </p>
            <p className="flex items-start">
              <div className="w-4 h-4 border-2 border-black mr-3 mt-1 flex-shrink-0"></div>
              <span>{t.productInfo2}</span>
            </p>
            <p className="flex items-start">
              <div className="w-4 h-4 border-2 border-black mr-3 mt-1 flex-shrink-0"></div>
              <span>{t.productInfo3}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative flex items-center justify-between">
            <div className="absolute -left-4 top-0 w-2 h-full bg-white"></div>
            <div className="flex items-center">
              <img src="/logo.jpg" alt="Axie Studio Logo" className="w-16 h-16 mr-4" />
              <div>
                <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
                <p className="text-gray-300">{t.tagline}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex border-2 border-white">
                <button 
                  onClick={() => setLanguage('sv')}
                  className={`px-3 py-1 text-sm font-semibold transition-all duration-300 ${
                    language === 'sv' 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  SV
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-semibold transition-all duration-300 ${
                    language === 'en' 
                      ? 'bg-white text-black' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  EN
                </button>
              </div>
              <button 
                onClick={() => setCurrentPage('products')}
                className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                {t.products}
              </button>
            </div>
          </div>
        </div>
      </header>

      {currentPage === 'home' ? <HomePage /> : <ProductsPage />}

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-2 h-full bg-white"></div>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="text-gray-400 text-sm">{t.tagline}</p>
            </div>
            <img src="/logo.jpg" alt="Axie Studio Logo" className="w-12 h-12" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;