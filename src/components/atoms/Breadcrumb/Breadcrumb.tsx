import type React from "react"
import { ArrowRightIcon } from "../Icons/ArrowRightIcon"
import type { CategoryProduct, SimpleProduct } from "../../../types/CategoryProduct"
import { Link } from "react-router-dom"
import { HomeButton } from "../UtilityButton";

interface BreadcrumbProps {
    product: CategoryProduct | SimpleProduct | null | undefined;
    hideProductName?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ product, hideProductName }) => {
    if (!product) {
        return null;
    }

    return (
        <div className="flex items-center gap-2 overflow-hidden sm:mb-6 md:mb-10 mt-6 cursor-pointer">
            <Link to="/" className="flex items-center justify-center w-6 h-6 ">
                <HomeButton className="cursor-pointer"/>
            </Link>

            <ArrowRightIcon className="shrink-0" />

            {!hideProductName && product.id ? (
                <>
                    <span className="text-primary capitalize transition-transform duration-200 ease-in-out hover:scale-110 active:scale-110">
                        <Link to={`/${product?.category}`}>
                            {product.category}
                        </Link>
                    </span>
                    <ArrowRightIcon />
                    <span className="text-secondary whitespace-nowrap overflow-hidden text-ellipsis cursor-text">
                        {product.name}
                    </span>
                </>
            ) : (
                <span className="text-secondary capitalize cursor-text ">
                    {product.category}
                </span>
            )}
        </div>
    );
};