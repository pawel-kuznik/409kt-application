import useStratagemsList from "../Hooks/useStratagemsList";
import PrintPage from "./CardsPrint/PrintPage";
import StratagemCard from "./CardsPrint/StratagemCard";

export default function CardsPrint() {

    const { list } = useStratagemsList();

    return (
        <section>
            <PrintPage>
                {list.map(s => <StratagemCard key={s.id} stratagem={s}/>)}
            </PrintPage>
        </section>
    );
};