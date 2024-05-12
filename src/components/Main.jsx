import { useChangeElements } from '../hooks/changeElements';



export function Main() {

    const { handleButtonNo, handleButtonYes, textP, image, textIntro, handleButtonNext } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col gap-2'>
                    {/* Título */}
                    <h1 className='font-sans font-bold text-gray-400 text-2xl'>{textIntro}</h1>

                    {/* Botón Siguiente (si el texto no es 'Quieres ser mi novia?') */}
                    {textIntro !== 'Quieres ser mi novia?' && (
                        <button className='bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNext}>
                            &rarr; {/* Flecha a la derecha */}
                        </button>
                    )}

                    {/* Imagen */}
                    <img src={image} className='w-72' alt='Imagen' />

                    {/* Texto */}

                    {/* Botones Si y No */}
                    {textIntro === 'Quieres ser mi novia?' && (
                        <><p className='font-mono text-yellow-100'>{textP}</p><section className='flex gap-3'>
                            <button className='bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}>
                                Si
                            </button>
                            <button className='bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}>
                                No
                            </button>
                        </section></>
                    )}
                </div>
            </main>
        </>
    );
}