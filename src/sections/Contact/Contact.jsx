import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";


const Contact = () => {


  const [formData, setFormData] = useState({

    name: "",

    email: "",

    message: "",

  });



  const [status, setStatus] = useState({

    loading: false,

    success: "",

    error: "",

  });





  const handleChange = (e) => {


    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });


  };






  const handleSubmit = async (e) => {


    e.preventDefault();




    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {


      setStatus({

        loading:false,

        success:"",

        error:"Veuillez remplir tous les champs.",

      });


      return;


    }





    const SERVICE_ID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;


    const TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


    const CONFIRM_TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM_ID;


    const PUBLIC_KEY =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;






    console.log("========== EMAILJS AUDIT ==========");


    console.log(
      "SERVICE ID :",
      SERVICE_ID
    );


    console.log(
      "TEMPLATE ID :",
      TEMPLATE_ID
    );


    console.log(
      "PUBLIC KEY :",
      PUBLIC_KEY
    );


    console.log(
      "FORM DATA :",
      formData
    );


    console.log("====================================");







    if (
      !SERVICE_ID ||
      !TEMPLATE_ID ||
      !PUBLIC_KEY
    ) {


      setStatus({

        loading:false,

        success:"",

        error:
        "Configuration EmailJS manquante. Vérifiez votre fichier .env.",

      });


      return;


    }






    setStatus({

      loading:true,

      success:"",

      error:"",

    });






    try {


      const response = await emailjs.send(


        SERVICE_ID,


        TEMPLATE_ID,


        {


          from_name:
          formData.name,


          from_email:
          formData.email,


          message:
          formData.message,


        },


        PUBLIC_KEY


      );





      console.log(
        "Réponse EmailJS :",
        response
      );


      /*
      ===================================
      EMAIL DE CONFIRMATION VISITEUR
      ===================================
      */


      await emailjs.send(

        SERVICE_ID,

        CONFIRM_TEMPLATE_ID,

        {

          from_name:
          formData.name,


          from_email:
          formData.email,


          message:
          formData.message,

        },

        PUBLIC_KEY

      );


      console.log(
        "Confirmation visiteur envoyée."
      );






      setStatus({

        loading:false,

        success:
        "Votre message a bien été envoyé. Merci pour votre contact.",

        error:"",

      });






      setFormData({

        name:"",

        email:"",

        message:"",

      });




    } catch(error) {


      console.error(
        "ERREUR EMAILJS :",
        error
      );


      console.error(
        "DETAIL :",
        error?.text
      );




      setStatus({

        loading:false,

        success:"",

        error:
        "Une erreur est survenue lors de l'envoi. Consultez la console.",

      });


    }


  };




  return (

    <section
      id="contact"
      className="py-32"
    >

      <Container>


        <SectionTitle

          title="Me contacter"

          subtitle="Disponible pour des opportunités en développement Full Stack, des collaborations ou des projets innovants."

        />



        <div className="mt-16 grid gap-10 lg:grid-cols-2">


          {/* ======================= */}
          {/* Informations */}
          {/* ======================= */}


          <motion.div

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.6
            }}

            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              p-8
              shadow-2xl
              backdrop-blur
            "

          >


            <span
              className="
                rounded-full
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-300
              "
            >
              Disponible
            </span>


            <h3 className="mt-6 text-4xl font-bold text-white">
              Eric Adia Kore
            </h3>


            <p className="mt-5 leading-8 text-slate-300">
              Développeur Full Stack spécialisé en React,
              Django, PostgreSQL et Python.
              Je conçois des applications web modernes,
              performantes et évolutives.
            </p>

                        <div className="mt-10 space-y-6">


              <a
                href="mailto:adia.kore@uvci.edu.ci"
                className="
                  flex
                  items-center
                  gap-4
                  text-slate-300
                  transition
                  hover:text-blue-400
                "
              >

                <Mail className="text-blue-400" />

                adia.kore@uvci.edu.ci

              </a>




              <a
                href="tel:+2250749004853"
                className="
                  flex
                  items-center
                  gap-4
                  text-slate-300
                  transition
                  hover:text-blue-400
                "
              >

                <Phone className="text-blue-400"/>

                +225 07 49 00 48 53

              </a>




              <a
                href="tel:+2250172602559"
                className="
                  flex
                  items-center
                  gap-4
                  text-slate-300
                  transition
                  hover:text-blue-400
                "
              >

                <Phone className="text-blue-400"/>

                +225 01 72 60 25 59

              </a>




              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-slate-300
                "
              >

                <MapPin className="text-blue-400"/>

                Abidjan, Côte d'Ivoire

              </div>


            </div>





            <div className="mt-10 flex flex-wrap gap-4">


              <a
                href="https://github.com/Pantcho225"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  px-5
                  py-3
                  transition
                  hover:bg-white/10
                "
              >

                <FaGithub />

                GitHub

              </a>





              <a
                href="/cv-eric-adia-kore.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >

                <FileText size={18}/>

                Télécharger mon CV

              </a>


            </div>


          </motion.div>







          {/* ======================= */}
          {/* Formulaire */}
          {/* ======================= */}


          <motion.form

            onSubmit={handleSubmit}

            initial={{
              opacity:0,
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.6
            }}

            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              p-8
              shadow-2xl
              backdrop-blur
              space-y-6
            "

          >



            <input

              type="text"

              name="name"

              value={formData.name}

              onChange={handleChange}

              placeholder="Votre nom"

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "

            />





            <input

              type="email"

              name="email"

              value={formData.email}

              onChange={handleChange}

              placeholder="Votre adresse e-mail"

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "

            />





            <textarea

              name="message"

              value={formData.message}

              onChange={handleChange}

              rows={7}

              placeholder="Décrivez votre projet..."

              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-5
                py-4
                outline-none
                transition
                focus:border-blue-500
              "

            />







            {status.success && (

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-green-500/10
                  p-4
                  text-green-400
                "
              >

                <CheckCircle size={20}/>

                {status.success}

              </div>

            )}







            {status.error && (

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-red-500/10
                  p-4
                  text-red-400
                "
              >

                <AlertCircle size={20}/>

                {status.error}

              </div>

            )}







            <button

              type="submit"

              disabled={status.loading}

              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "

            >

              <Send size={18}/>



              {status.loading

                ? "Envoi en cours..."

                : "Envoyer le message"

              }


            </button>





          </motion.form>





        </div>





      </Container>


    </section>

  );


};


export default Contact;