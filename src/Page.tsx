import { Orientation, PageSize } from './Types';

// properties of the component
export interface PageProps {

    // the orientation of the page
    orientation:Orientation

    // the size of the page. This should conform to possible printing sizes.
    size:PageSize;
};

// export the component
export default function Page(props:PageProps) {
    return (
        <div>
        </div>
    );
};