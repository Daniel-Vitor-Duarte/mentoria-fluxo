"use client";
import Image from "next/image";
import linesR from "@/icons/top-lines-right.png"
import linesL from "@/icons/top-lines-left.png"
import alerta from "@/icons/alerta-dark.png"
import crescimento from "@/images/crescimento.png"
import crescimentoM from "@/images/crescimentoM.png"
import vender from "@/images/vender-mais.png"
import Testimonials from "../Dialog/youtubeDialog-light"
import Btn from "../Button/venderMais"



export default function light({ setToggleModal }){
    return(
        <main>
            <section className="sm:flex sm:flex-col items-center">
                <div className="w-full min-h-[8rem] bg-[#F5FF00] shadow-x3 flex justify-between sm:hidden ">
                <Image className="h-auto" src={linesL} alt=""/>
                <div className="flex items-center gap-8">
                    <Image src={alerta} alt=""/>
                    <p className="text-[1.25rem] font-medium leading-[2rem]">
                    Cuidado ao clicar no botão de <strong>“Quero vender mais”.</strong> <br />
                    80% das pessoas que clicam, incluindo os curiosos, acabam comprando. E não é nada barato.
                    </p>
                </div>
                <Image className="h-auto" src={linesR} alt=""/>
                </div>
                <div>
                    <Image className="hidden sm:block -mt-[7.55rem] " src={vender} alt=""/>
                    <Image className="sm:hidden w-full" src={crescimento} alt=""/>
                    <Image className=" hidden sm:block -mt-[7.55rem]" src={crescimentoM} alt=""/>
                </div>
                <section className="radial-light-top text-black font-medium sm:py-16 py-[7.5rem] ">
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold leading-12 text-center ">
                    Olha só o que aconteceu com as pessoas que <br className="sm:hidden" /> clicaram no botão “Quero vender mais”:
                    </h1>
                    <Testimonials />
                    
                    <div className="flex flex-col items-center mt-[5.5rem] w-[36rem] sm:w-[21.375rem] text-[1.25rem] text-center mx-auto">
                    <div className="bg-[#0000003d] w-12 h-[.4375rem]"></div>
                    <h1 className="text-[2.5rem] sm:text-[1.5rem] font-bold mt-6  sm:mt-4">Entre no Fluxo</h1>
                    <p className="my-8 sm:my-6">
                    Agende a apresentação construa um <br className=" sm:hidden" /> negócio consistente  e sólido com a nossa <br className=" sm:hidden" /><strong> mentoria individual de 12 meses.</strong>
                    </p>
                    <Btn setToggleModal={setToggleModal}/>
                    </div>
                </section>
            </section>
        </main>
    )
}