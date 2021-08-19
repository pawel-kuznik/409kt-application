/**
 *  Special class to define a page size.
 */
export default class PageSize {

    /**
     *  Special getters to get prededfined page sizes.
     */
    static get a4() : PageSize { return new this(210, 297); }
    // @todo add more sizes

    /**
     *  Properties to hold short and long edge of the size. We use this
     *  rather than width/height cause you can always rotate the page
     *  and the width/height naming makes no sense.
     */
    private readonly _short:number;
    private readonly _long:number;

    /**
     *  Private constructor cause caller code should stick with predefined
     *  sizes for sanity and safety.
     */
    private constructor(short:number, long:number) {

        this._short = short;
        this._long = long;
    }

    /**
     *  Accessors for short and long edge of the page.
     */
    get short() : number { return this._short; }
    get long() : number { return this._long; }
};
