import StratagemForm from "./StratagememsSection/StratagemForm";
import StratagemsList from "./StratagememsSection/StratagemsList";

/**
 *  A component to wrap up a whole section.
 */
export default function StratagemSection() {
    return (
        <section>
            <StratagemsList/>
            <StratagemForm/>
        </section>
    );
};