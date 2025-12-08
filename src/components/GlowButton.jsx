import React from "react";

export default function GlowButton({ text, href, target = "_self", onClick }) {
return ( 
<a
   href={href}
   target={target}
   onClick={onClick}
   className="relative inline-block font-semibold py-3 px-6 text-light-accent"
 > 
    <span className="relative z-10">{text}</span>

    <span className="
        absolute inset-0 z-0
        before:content-[''] before:absolute before:inset-0
        before:bg-warm-accent/25 
        before:blur-lg
        before:rounded-full
        before:opacity-70
        before:scale-80
        before:transition-all
        hover:before:opacity-90 hover:before:blur-xl hover:before:scale-100"
    >
    </span>
</a>
);
}
