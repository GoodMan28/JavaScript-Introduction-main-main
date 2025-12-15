import './App.css'

export default function App() {

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-blue-200 p-4 rounded'>
                </div>
            </div>
        </>
    )
}

// | Direction            | Main axis  | Controlled by | Cross axis | Controlled by |
// | -------------------- | ---------- | ------------- | ---------- | ------------- |
// | `flex-row` (default) | Horizontal | `justify-*`   | Vertical   | `items-*`     |
// | `flex-col`           | Vertical   | `justify-*`   | Horizontal | `items-*`     |


// 2. Grid Axes

// Grid is simpler:

// justify-* → aligns items along row (horizontal) axis

// items-* → aligns items along column (vertical) axis

// And place-items-center is shorthand for justify-items-center items-center.