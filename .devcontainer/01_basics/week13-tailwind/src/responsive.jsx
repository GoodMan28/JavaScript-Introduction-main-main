// Tailwind has a mobile first approach that means that the unprefixed properties will be followed as default
// And the prefixed properties will be applicable for the certain breakpoint and above

// Example: 
// <div className="sm:bg-blue-200 bg-red-200"></div> => This means that initially under the width of sm the color will be red and as we hit the 640 px breakpoint the color changes to blue and will prevail for larger widths
// Now this seems counter intuitive, as one would see and say that when the screen is small then put the blue color and for higher widths put the red color. But here comes the mobile first approach of the tailwind explained above
import "./App.css"

export default function App() {
    return (
        <>
            <div className="sm:grid sm:grid-cols-12 sm:gap-4">
                <div className='sm:col-span-4 bg-[#ff7979]'>Hi first div</div>
                <div className='sm:col-span-4 bg-blue-200'>Hi second div</div>
                <div className='sm:col-span-4 bg-green-200'>Hi third div</div>
            </div>
        </>
    );
}

// After that some border-readius and font size properties are there which can be referred

// Here since the color utility were unprefixed hence they were applied globally hence they were applied  globally
// And the utility prefixed will be applied above that breakpoint.

// And we can layer the background color by adding a prefixed utility


// Link to the slides: https://www.canva.com/design/DAGVU1RXwn0/EBNpEgL7LxVUQd6ThorItA/edit