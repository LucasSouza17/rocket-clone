import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  
  const [isDisable, setIsDisable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if(!name || !email) {
      setIsDisable(true);
    }else {
      setIsDisable(false);
    }
  }, [name, email])

  return (
    <div className={styles.container}>
      <main id={styles.main}>
        <section className={styles.sectionForm}>
          <div className={styles.containerSection}>
            <div className={styles.containerInfoSection}>
              <div className={styles.containerSectionPrimary}>
                <div className={styles.presentationContent}>
                <svg  className={styles.logo} width="255" height="71" viewBox="0 0 255 71" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M34.2179 37.1841L34.2179 24.8862L0.670548 37.5239H0.600922L0.600922 50.1424H0.670548L34.2179 62.7801L34.2179 50.463L17.0201 43.8075L34.2179 37.1841Z" fill="#8257E6"></path><path fillRule="evenodd" clipRule="evenodd" d="M220.825 62.1341L220.825 49.8362L238.01 43.2192L220.825 36.6022L220.825 24.3043L254.328 36.9356H254.411L254.411 49.5669H254.328L220.825 62.1341ZM206.438 6.91541L186.734 70.9824H198.431L218.135 6.91541L206.438 6.91541Z" fill="#8257E6"></path><path fillRule="evenodd" clipRule="evenodd" d="M83.5155 22.5575C86.8436 26.2643 88.5949 31.1508 88.3894 36.157L88.3894 63.4458H76.6921L76.6921 38.664C76.8282 35.9033 75.9588 33.1881 74.2489 31.034C73.4475 30.0888 72.4451 29.3399 71.317 28.8435C70.1889 28.3471 68.9645 28.1161 67.7356 28.1679C60.41 28.1679 56.7473 33.3144 56.7473 43.6076L56.7473 63.4458H45.05L45.05 18.6463H56.7473L56.7473 22.6922C58.5847 20.8825 60.7675 19.472 63.162 18.547C65.5565 17.622 68.1122 17.2019 70.6726 17.3126C73.0585 17.2104 75.4384 17.6254 77.6533 18.5299C79.8681 19.4344 81.8667 20.8076 83.5155 22.5575Z" fill="#E1E1E6"></path><path fillRule="evenodd" clipRule="evenodd" d="M100.336 0.0154419L100.336 64.0825H112.034L112.034 0.0154419L100.336 0.0154419Z" fill="#E1E1E6"></path><path fillRule="evenodd" clipRule="evenodd" d="M175.194 61.7304H165.434L155.863 35.3393L146.204 61.7304H136.456L120.056 16.8476H132.557L141.773 43.6875L151.268 16.8476L160.395 16.8476L169.89 43.7773L179.106 16.8476L191.607 16.8476L175.194 61.7304Z" fill="#E1E1E6"></path></g><defs><clipPath id="clip0"><rect width="255" height="71" fill="white"></rect></clipPath></defs></svg>
                  <div className={styles.textSideLogo}>
                    <div>
                      edição#
                    <span>04</span>
                    </div>
                    <div style={{ margin: 0 }}>
                      <div>
                        conteúdo_
                       <span>inédito</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h1>Juntos para o próximo nível<span>.</span></h1>
                <h2>Um evento para dar o próximo passo na sua evolução como programadora ou programador.</h2>
                <div className={styles.dateInfoGrid}>
                  <div className={styles.dateInfo}>
                  <svg className={styles.dateicon} width="40" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M39.2734 44H4.72656C2.12034 44 0 41.9439 0 39.4167V17.75C0 17.0597 0.577156 16.5 1.28906 16.5H42.7109C43.4228 16.5 44 17.0597 44 17.75V39.4167C44 41.9439 41.8797 44 39.2734 44Z" fill="url(#paint0_linear)"></path><path opacity="0.8" d="M39.2734 4.8125H4.72656C2.12034 4.8125 0 6.91736 0 9.50456V16.5H44V9.50456C44 6.91736 41.8797 4.8125 39.2734 4.8125Z" fill="url(#paint1_linear)"></path><path d="M31.797 0.00012207C30.6578 0.00012207 29.7345 1.10818 29.7345 2.47512V9.90012C29.7345 11.2671 30.6578 12.3751 31.797 12.3751C32.9361 12.3751 33.8595 11.2671 33.8595 9.90012V2.47512C33.8595 1.10818 32.9361 0.00012207 31.797 0.00012207Z" fill="#04D361"></path><path d="M11.1717 12.3751C10.0325 12.3751 9.10916 11.2671 9.10916 9.90012V2.47512C9.10916 1.10818 10.0325 0.00012207 11.1717 0.00012207C12.3108 0.00012207 13.2342 1.10818 13.2342 2.47512V9.90012C13.2342 11.2671 12.3108 12.3751 11.1717 12.3751Z" fill="#04D361"></path><defs><linearGradient id="paint0_linear" x1="40.9123" y1="39.05" x2="-1.06736" y2="18.7021" gradientUnits="userSpaceOnUse"><stop stopColor="#8257E6"></stop><stop offset="0.996535" stopColor="#04D361"></stop></linearGradient><linearGradient id="paint1_linear" x1="40.9123" y1="14.3963" x2="18.3792" y2="-11.3026" gradientUnits="userSpaceOnUse"><stop stopColor="#8257E6"></stop><stop offset="0.996535" stopColor="#04D361"></stop></linearGradient></defs></svg>
                    <div className={styles.textStyle}>
                      <span>22 a 28</span>
                      <br className={styles.br}/>
                      de Fevereiro
                    </div>
                  </div>
                  <div className={styles.dateInfo}>
                  <svg className={styles.dangericon} width="40" height="40" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M1.04843 33.0186L19.2015 3.66858C20.5575 1.4764 23.0932 0 26 0V0.000396124L26 0.00012207C28.9068 0.00012207 31.4425 1.47652 32.7985 3.6687L50.9515 33.0187C51.6172 34.095 52 35.3429 52 36.675C52 40.7203 48.4867 44 44.1529 44H26L26 43.9999H7.84711C3.51325 43.9999 0 40.7202 0 36.6749C0 35.3427 0.382789 34.0949 1.04843 33.0186Z" fill="url(#paint0_linear)"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.7716 13.7135L25.7752 13.7136C26.9937 13.7153 27.9803 14.5464 27.9803 15.5717V25.6054C27.9803 26.6311 26.9916 27.4636 25.7713 27.4636V27.4635C24.5512 27.4634 23.5627 26.631 23.5627 25.6054V15.5716C23.5627 14.5452 24.5514 13.7135 25.7716 13.7135ZM25.7711 31.5625V31.5626C24.5509 31.5626 23.5623 32.4916 23.5623 33.6381C23.5623 34.7846 24.551 35.7137 25.7712 35.7137L25.7752 35.7136C26.9935 35.7115 27.98 34.7833 27.98 33.638C27.98 32.4916 26.9913 31.5625 25.7711 31.5625Z" fill="#04D361"></path><defs><linearGradient id="paint0_linear" x1="48.3508" y1="36.08" x2="-5.95633" y2="16.6367" gradientUnits="userSpaceOnUse"><stop stopColor="#8257E6"></stop><stop offset="0.996535" stopColor="#04D361"></stop></linearGradient></defs></svg>
                    <div className={styles.textStyle}>
                      <span>100% online</span>
                      <br />
                      e gratuito
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.containerSectionSecondary}>
                <div className={styles.titleForm}>
                  <h3>Inscrição gratuita</h3>
                </div>
                <form className={styles.formContainer}>
                  <div className={styles.inputContainer}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={styles.svgicon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                    <input onChange={(e) => {setName(e.target.value)}}  type="text" id="name" className={styles.input} placeholder="Digite o seu nome" />
                  </div>
                  <div className={styles.inputContainer}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={styles.svgicon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" className={styles.input} placeholder="E-mail" />
                  </div>
                  <div className={styles.containerButtonSubmit}>
                    <button className={styles.button} disabled={isDisable} type="submit">QUERO ME INSCREVER</button>
                  </div>
                  <div className={styles.containerCheckBox}>
                    <div className={styles.containerBoxCheck}>
                      <div className={styles.boxCheckBox}>
                        <span>
                          <input id="consent" type="checkbox" className={styles.checkbox} />
                          <label htmlFor="consent" className={styles.labelCheck}>Concordo em receber comunicações</label>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
                <div className={styles.lineSeparator}></div>
                <div className={styles.footerForm}>
                  <div className={styles.footerFormData}>
                    <svg className={styles.colorsvg} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C9.243,2,7,4.243,7,7v3H6c-1.103,0-2,0.897-2,2v8c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2v-8c0-1.103-0.897-2-2-2 h-1V7C17,4.243,14.757,2,12,2z M18,12l0.002,8H6v-8H18z M9,10V7c0-1.654,1.346-3,3-3s3,1.346,3,3v3H9z"></path></svg>
                    <span>Sua informações<br />estão seguras</span>
                  </div>
                  <div className={styles.footerFormData}>
                    <svg className={styles.colorsvg} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M4,12c0-1.846,0.634-3.542,1.688-4.897 l11.209,11.209C15.543,19.366,13.846,20,12,20C7.589,20,4,16.411,4,12z M18.312,16.897L7.103,5.688C8.458,4.634,10.154,4,12,4 c4.411,0,8,3.589,8,8C20,13.846,19.365,15.542,18.312,16.897z"></path></svg>
                    <span>Somos<br />contra spam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
