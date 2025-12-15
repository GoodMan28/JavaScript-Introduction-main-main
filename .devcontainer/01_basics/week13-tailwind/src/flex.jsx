import './App.css'
function App() {

    return (
        <>
            {/* <div className='text-blue-200'>hi</div> */}

            {/* <div style={{display: "flex", justifyContent: "space-between"}}> */}    {/* Normal CSS where we put the styles in the object */}
            <div className='flex justify-between'>  {/* Format for the tailwind css */}
                <div>Child 1</div>
                <div>Child 2</div>
                <div>Child 3</div>
            </div>
        </>
    )
}

export default App
