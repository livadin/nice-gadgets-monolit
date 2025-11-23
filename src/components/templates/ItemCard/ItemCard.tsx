import React, { useState } from "react";
import { HomeIcon } from "../../atoms/Icons/HomeIcon";
import { ArrowRightIcon } from "../../atoms/Icons/ArrowRightIcon";
import type { CategoryProduct, SimpleProduct } from "../../../types/CategoryProduct";
import { ProductSlider } from "../../organisms/Sliders/ProductSlider";
import { PrimaryButton } from "../../atoms/PrimaryButton/PrimaryButtom";
import { ColorButton, FavoriteButton, PageButton } from "../../atoms/UtilityButton";
import { BackButton } from "../../atoms/BackButton/BackButton";

type ItemCardProps = {
    itemProduct: CategoryProduct;
    productList: CategoryProduct[];
    productsForSlider: SimpleProduct[];
}

export const ItemCard: React.FC<ItemCardProps> = ({ itemProduct, productList, productsForSlider }) => {
    if (!itemProduct) {
        return
    }
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedPrimary, setSelectedPrimary] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedFavorite, setSelectedFavorite] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentProduct, setCurrentProduct] = useState(itemProduct);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mainImage, setMainImage] = useState(itemProduct.images[0]);
    
    
    const handleCapacityChange = (capacity: string) => {
    const foundCapacity = productList.find(list =>
        list.namespaceId === currentProduct.namespaceId &&
        list.capacity === capacity &&
        list.color === currentProduct.color
    );
    if (foundCapacity) {
        setCurrentProduct(foundCapacity);
        setMainImage(foundCapacity.images[0]);
    }
    };

    const hanldeColorChange = (color: string) => {
        const foundColor = productList.find(list =>
            list.namespaceId === currentProduct.namespaceId &&
            list.color === color &&
            list.capacity === currentProduct.capacity
        );
        if (foundColor) {
            setCurrentProduct(foundColor);
            setMainImage(foundColor.images[0])
        }
    }

    let availableColor: string[] = []; 
    
    if (currentProduct.colorsAvailable) {
        availableColor = [ ...currentProduct.colorsAvailable ];
    }


    return (
        <div className="min-h-screen flex flex-col">
                        
                <div className="flex items-center gap-2 overflow-hidden sm:mb-6 md:mb-10">
                    <HomeIcon className="shrink-0" />
                    <ArrowRightIcon className="shrink-0" />
                    
                    <p className="text-primary">{itemProduct.category}</p>
                    
                    <ArrowRightIcon />

                    <p className="text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                        {currentProduct.name}
                    </p>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                    <BackButton text="Back" className="mt-[25px] md:mt-9" />
                </div>
                
                <div>
                    <h3 className="sm:text-2xl md:text-3xl font-extrabold sm:mb-8 md:mb-10">{currentProduct.name}</h3>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between md:gap-16 mb-20">
                        
                       <div className="flex flex-col md:flex-row gap-6 mb-10 md:mb-0">
                            <div className="flex flex-row md:flex-col gap-3 w-full md:w-20 
                                order-2 md:order-1 justify-center md:justify-start">
                                {currentProduct.images.slice(1).map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img}
                                        alt={`${currentProduct.name}`}
                                        className={`h-14 w-14 object-contain cursor-pointer border 
                                                md:h-16 md:w-16 lg:h-20 lg:w-20
                                                transition-transform duration-300 
                                              border-element hover:border-secondary
                                              active:border-primary p-2 rounded-none
                                                ${mainImage === img ? 'scale-110 border-primary' : 'hover:scale-110'}`}
                                        onClick={() => setMainImage(img)}
                                    />
                                ))}
                            </div>
                            <div className="w-full sm:w-[288px] md:w-[287px] lg:w-[464px]
                             aspect-square flex items-center justify-center overflow-hidden mx-auto md:mx-0 order-1 md:order-2">
                                <img
                                    src={mainImage}
                                    alt={currentProduct.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>

                    <div className="flex flex-col gap-5 md:w-[48%]">
                        <div className="w-full max-w-[320px]">
                            
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xs text-secondary">Available colors</h3>
                                <span className="text-xs text-secondary">ID: is real id  </span>
                            </div>

                            <div className="flex gap-2">
                                {availableColor.map((color, index) => (
                                    <ColorButton
                                        key={index}
                                        color={color}
                                        selected={currentProduct.color === color}
                                        onClick={() => hanldeColorChange(color)}
                                    />
                                ))}
                            </div>
                            
                        <div className="border-t border-element mt-8 pt-4">
                            <h3 className="text-xs text-secondary mb-2">Select capacity</h3>
                            <div className="flex gap-2 flex-wrap">
                                {itemProduct.capacityAvailable.map((n, index) => (
                                    <PageButton
                                        key={index}
                                        page={n}
                                        selected={currentProduct.capacity === n}
                                        onClick={() => handleCapacityChange(n)}
                                        className="text-[12px] px-6 py-2.5"    
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="border-t border-element pt-4 mt-8">

                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-primary text-[32px] font-extrabold">
                                    ${currentProduct.priceDiscount}
                                </span>
                                <span className="text-secondary text-[22px] line-through font-medium">
                                    ${currentProduct.priceRegular}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-3 lg:gap-4">
                                    <PrimaryButton
                                        buttonText={selectedPrimary ? 'Added' : 'Add to cart'}
                                        selected={selectedPrimary}
                                        onClick={() => setSelectedPrimary(prev => !prev)}
                                        className="flex-1 max-w-[263px] h-12"
                                    />
                                    <FavoriteButton 
                                        className="w-12 h-12"
                                        selected={selectedFavorite}
                                        onClick={() => setSelectedFavorite(prev => !prev)}
                                    />
                            </div>

                        </div>
                         
                            <div className="text-xs space-y-2 mt-8">
                                
                                <div className="flex justify-between">
                                    <span className="text-secondary">Screen</span>
                                    <span className="text-primary">{currentProduct.screen}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-secondary">Resolution</span>
                                    <span className="text-primary">{currentProduct.resolution}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-secondary">Processor</span>
                                    <span className="text-primary">{currentProduct.processor}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span className="text-secondary">RAM</span>
                                    <span className="text-primary">{currentProduct.ram}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
                    <div className="w-auto lg:w-[48%]">
                        <h3 className="text-2xl font-extrabold mb-4">About</h3>
                        
                        <div className="border-t border-element pt-6 mb-6">
                            <h4 className="font-bold text-[16px] lg:text-xl mt-8 mb-4">
                                {currentProduct.description[0].title}
                            </h4>
                            <p className="text-secondary font-medium text-[14px]">
                                {currentProduct.description[0].text}
                            </p>
                        </div>
                        <div className="mb-8">
                            <h4 className="font-bold text-[16ppx] lg:text-xl mb-4">
                                {currentProduct.description[1].title}
                            </h4>
                            <p className="text-secondary font-medium text-[14px]">
                                {currentProduct.description[1].text}
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-20">
                            <h4 className="font-bold text-[16px] lg:text-xl mb-4">
                                {currentProduct.description[2].title}
                            </h4>
                            <p className="text-secondary font-medium text-[14px]">
                                {currentProduct.description[2].text}
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-auto lg:w-[48%] mb-12 lg:mb-14">
                        <h3 className="text-2xl font-extrabold mb-4">Tech specs</h3>
                        
                        <div className="border-t border-element text-[14px] text-right space-y-2 pt-2">
                            <div className="flex justify-between mt-6">
                                <span className="text-secondary">Screen</span>
                                <span className="text-primary">{currentProduct.screen}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-secondary">Resolution</span>
                                <span className="text-primary">{currentProduct.resolution}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-secondary">Processor</span>
                                <span className="text-primary">{currentProduct.processor}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-secondary">RAM</span>
                                <span className="text-primary">{currentProduct.ram}</span>
                            </div>
                            {currentProduct.category !== 'accessories' ? (
                                <>
                                <div className="flex justify-between">
                                    <span className="text-secondary">Built in memory</span>
                                    <span className="text-primary">{currentProduct.capacity}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-secondary">Camera</span>
                                    <span className="text-primary">{currentProduct.camera}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-secondary">Zoom</span>
                                    <span className="text-primary">{currentProduct.zoom}</span>
                                </div>
                                </>
                            ) : (
                                <div className="flex justify-between">
                                    <span className="text-secondary">Display size</span>
                                    <span className="text-primary">{currentProduct.capacity}</span>
                                </div>
                            )}
                        
                             <div className="flex justify-between">
                                <span className="text-secondary">Cell</span>
                                <span className="text-primary wrap-break-words max-w-[60%]">{currentProduct.cell.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mb-12 lg:mb-16">
                    <ProductSlider products={productsForSlider} title='You may also like' />
                </div>
            
        </div>
    );
};