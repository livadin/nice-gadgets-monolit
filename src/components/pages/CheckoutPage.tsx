import { Cross2Icon } from '@radix-ui/react-icons';
import cn from 'clsx';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import { BackButton } from '../atoms/BackButton/BackButton';
import { PrimaryButton } from '../atoms/PrimaryButton/PrimaryButtom';

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

export const CheckoutPage: React.FC = () => {
  const theme = localStorage.getItem('theme');
  const navigate = useNavigate();

  const { 
    cart, 
    removeFromCart, 
    checkout,
  } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryCost;

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handlePayment = () => {
    if (cart.length === 0) return;

    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    let hasError = false;

    Object.keys(formData).forEach((key) => {
      const fieldKey = key as keyof FormData;
      if (!formData[fieldKey].trim()) {
        newErrors[fieldKey] = true;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    checkout(); 
    navigate('/');
  };

  const cardClassName = cn(
    'group p-6 md:p-8 w-full h-auto rounded-2xl relative', 
    'text-primary flex flex-col gap-6', 
    'transition-all duration-300 ease-linear',
    'border',
    {
      'bg-white-card': theme === 'light',
      'bg-[#fff]/15': theme === 'dark',
      'hover:shadow-[0px_0px_24px_1.5px_rgba(87,21,115,0.7)]': theme === 'light',
      'hover:shadow-[0px_0px_24px_1.5px_rgba(255,255,255,0.7)]': theme === 'dark',
      'backdrop-blur-[3px]': theme === 'light',
      'backdrop-blur-[10px]': theme === 'dark',
    },
  );

  const baseInputClass = cn(
    'w-full bg-white/80 border rounded-lg',
    'px-4 py-3 text-primary placeholder:text-primary/50', 
    'focus:outline-none focus:ring-2',
    'transition-all'
  );
  
  const labelClass = cn(
    'block text-sm font-semibold mb-1 opacity-90',
    'text-primary'
  );

  return (
    <section className="py-0 w-full min-h-screen lg:py-8">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
      
      <div className="relative z-10 px-4 pb-10">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />
 
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1200px] mx-auto items-start">
          
          {/* --- LEFT COLUMN: LIST OF PRODUCTS --- */}
          <article className={cardClassName}>
            <h2 className="text-2xl font-bold pb-4 border-b border-gray-400/30">Shopping Cart</h2>

            <div className="flex flex-col gap-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                <div 
                    key={item.itemId} 
                    className={cn(
                    "flex flex-col md:flex-row gap-4 items-center relative border-b border-gray-400/10 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0",
                    "w-full"
                    )}
                >
                    
                    {/* --- IMAGE --- */}
                    <Link 
                    to={`/${item.category}/${item.itemId}`} 
                    className={cn(
                        "w-25 h-33", 
                        "rounded-xl overflow-hidden shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 bg-white/5"
                    )}
                    >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-auto h-auto" 
                    />
                    </Link>
                    
                    {/* --- TEXT INFO (Name & Price calculation) --- */}
                    <div className="flex-grow flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
                    <Link 
                        to={`/${item.category}/${item.itemId}`}
                        className="font-bold text-lg leading-tight hover:underline decoration-1 underline-offset-4 mb-1"
                    >
                        {item.name}
                    </Link>
                    <p className="text-sm opacity-70">
                        ${item.price} x {item.quantity}
                    </p>
                    </div>

                    {/* --- TOTAL PRICE --- */}
                    <div className="flex flex-col items-center md:items-end gap-1 mt-1 md:mt-0">
                    <span className="font-bold text-xl text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    </div>
                    
                    {/* --- REMOVE BUTTON (Cross) --- */}
                    <button 
                    onClick={() => removeFromCart(item.itemId)}
                    className={cn(
                        "absolute top-0 right-0 p-2",
                        "md:static md:p-2", 
                        "text-current opacity-60 hover:opacity-100 hover:text-red-500 transition-colors"
                    )}
                    title="Remove item"
                    >
                    <Cross2Icon className="w-5 h-5" />
                    </button>
                </div>
                ))
              ) : (
                <div className="text-center py-10 opacity-70">
                  <p className="text-xl font-medium">Your cart is empty</p>
                  <Link to="/" className="text-blue-400 hover:underline mt-2 inline-block">Go shopping</Link>
                </div>
              )}
            </div>
            
            {/* Subtotal */}
            <div className="mt-auto pt-6 border-t border-gray-400/30 flex flex-col gap-3">
              <div className="flex justify-between text-lg">
                <span className="opacity-80">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="opacity-80">Delivery</span>
                <span className="font-bold">${deliveryCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </article>

          {/* --- RIGHT COLUMN: DELIVERY FORM  --- */}
          <article className={cn(cardClassName, "h-fit sticky top-24")}>
            <div>
              <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-4 mb-6">Delivery Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
                
                {/* First Name */}
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>First Name*</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.firstName ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="John" 
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Last Name*</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.lastName ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="Doe" 
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className={labelClass}>Address*</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.address ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="123 Main St" 
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>City*</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.city ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="Kyiv" 
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Phone*</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.phone ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="+380..." 
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className={labelClass}>Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(baseInputClass, errors.email ? 'border-red-500 ring-red-500/20 animate-shake' : 'border-gray-200 focus:ring-purple-500/50')} 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <PrimaryButton
                buttonText={`Pay Now $${total.toFixed(2)}`}
                onClick={handlePayment}
                className={cn(
                "w-full mt-6 font-bold py-4 rounded-xl text-xl shadow-lg transition-transform active:scale-[0.98] cursor-pointer",
                { "opacity-50 cursor-not-allowed grayscale pointer-events-none": cart.length === 0 }
              )}
              />
          </article>

        </div>
      </div>
    </section>
  );
};