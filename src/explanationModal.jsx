


function Explanation({visible , onClose, textToDisplay}) {

    if (!visible) return null;

    const handleOnClose = () => {
        onClose()

    }

    return (
        <>
        <div onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 dark:bg-black dark:bg-opacity-30 backdrop-blur-sm">
        <div className="dark:bg-white bg-black rounded p-8 m-96 dark:text-black text-white text-2xl">
            <p>{textToDisplay}</p>            
        </div>
        </div>
        
        </>
    )

}


export default Explanation