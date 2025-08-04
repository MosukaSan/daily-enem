import type { JSX } from "react";

function Spinner(): JSX.Element {
    return (
        <div className="w-[80px] h-[80px] border-[10px] border-dark-highlight border-t-correct rounded-full animate-spin"></div>
    );
}

export default Spinner;