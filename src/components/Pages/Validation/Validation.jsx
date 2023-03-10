import React, { useState } from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VerifyUsers } from "../../helpers/ApiRest";
import { toast } from "react-toastify";
import { OptionsAlert } from "../../helpers/ToastResp";

export const Validation = () => {

  const navigate = useNavigate()

  const [idNumber, setIdNumber] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Lógica para procesar el envío del formulario aquí
    await axios.get(`${VerifyUsers}/${idNumber}`)
    .then(({data}) =>{
      console.log(data)
      if (data.status === false) {
        toast.error('Perdon tu ya votaste', OptionsAlert)
      }else{
        localStorage.setItem('id_votante', JSON.stringify(idNumber))
        navigate('/card')
      }
    }).catch((err) =>{
      toast.error('No estas ingresado en el sena', OptionsAlert)
    })
  };

  return (
    <div>
      <div className=" bg-gray-100 flex flex-col  justify-center items-center h-screen p-5">
        <div className="bg-white lg:w-2/5 lg:h-2/4 p-10 rounded-lg shadow-slate-500 shadow-lg">
          <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
            <strong>¡Bienvenido</strong> por favor ingrese su numero de
            identificación para poder ingresar a votar!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="lg:mt-16 mt-10 mb-2 lg:mb-8">
              <label
                className="block text-lg lg:text-2xl text-gray-700 font-bold mb-2 text-center"
                htmlFor="idNumber">
                Ingresa tu número de identificación:
              </label>
              <input
                className="shadow appearance-none border rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="idNumber"
                type="number"
                placeholder="Número de identificación"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-3 lg:px-12 py-2 px-10 mt-8 rounded-md focus:outline-none focus:shadow-outline"
                type="submit">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
