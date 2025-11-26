import { Cross2Icon } from '@radix-ui/react-icons';
import cn from 'clsx';
import React from 'react'; // React import
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import { BackButton } from '../atoms/BackButton/BackButton';
import { PrimaryButton } from '../atoms/PrimaryButton/PrimaryButtom';

export const CheckoutPage: React.FC = () => {
  const theme = localStorage.getItem('theme');
  const navigate = useNavigate();

  // 1. Отримуємо дані та необхідні функції зі стору
  // Нам потрібен метод checkout зі стору, а не локальна функція
  const { 
    cart, 
    removeFromCart, 
    checkout, // <-- Беремо функцію checkout зі стору
  } = useCartStore();

  // 2. Обчислюємо суми
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryCost;

  // 3. Правильна функція оплати
  const handlePayment = () => {
    if (cart.length === 0) return;

    // Викликаємо метод зі стору (він очистить кошик і покаже нотифікацію успіху)
    checkout(); 
    
    // Перенаправляємо користувача на головну після замовлення
    navigate('/');
  };

  // --- СТИЛІ ---
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

  const inputClass = cn(
    'w-full bg-white/80 border border-gray-200 rounded-lg',
    'px-4 py-3 text-primary placeholder:text-primary/50', 
    'focus:outline-none focus:ring-2 focus:ring-purple-500/50',
    'transition-all'
  );
  
  const labelClass = cn(
    'block text-sm font-semibold mb-1 opacity-90',
    'text-primary'
  );

  return (
    <section className="py-0 w-full min-h-screen lg:py-8">
      
      <div className="relative z-10 px-4 pb-10">
        <BackButton text="Back" className="mt-[25px] md:mt-9" />
 
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1200px] mx-auto">
          
          {/* --- ЛІВА КОЛОНКА: СПИСОК ТОВАРІВ --- */}
          <article className={cardClassName}>
            <h2 className="text-2xl font-bold pb-4 border-b border-gray-400/30">Shopping Cart</h2>

            <div className="flex flex-col gap-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.itemId} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative border-b border-gray-400/10 pb-4 last:border-0 last:pb-0">
                    
                    <Link 
                      to={`/${item.category}/${item.itemId}`} 
                      className="w-25 h-25 rounded-xl overflow-hidden shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </Link>
                    
                    <div className="flex-grow flex flex-col justify-center">
                      <Link 
                        to={`/${item.category}/${item.itemId}`}
                        className="font-bold text-lg leading-tight hover:underline decoration-1 underline-offset-4"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm opacity-70 mt-1">${item.price} x {item.quantity}</p>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-1 mt-2 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.itemId)}
                      className="absolute top-0 right-0 sm:relative sm:top-auto sm:right-auto p-2 text-current opacity-60 hover:opacity-100 hover:text-red-500 transition-colors"
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
            
            {/* Підсумок (Subtotal) */}
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

          {/* --- ПРАВА КОЛОНКА: ФОРМА ДОСТАВКИ --- */}
          <article className={cardClassName}>
            <div>
              <h2 className="text-2xl font-bold border-b border-gray-400/30 pb-4 mb-6">Delivery Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary">
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>First Name*</label>
                  <input type="text" className={inputClass} placeholder="John" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Last Name*</label>
                  <input type="text" className={inputClass} placeholder="Doe" />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className={labelClass}>Address*</label>
                  <input type="text" className={inputClass} placeholder="123 Main St" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>City*</label>
                  <input type="text" className={inputClass} placeholder="Kyiv" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Phone*</label>
                  <input type="tel" className={inputClass} placeholder="+380..." />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className={labelClass}>Email*</label>
                  <input type="email" className={inputClass} placeholder="john@example.com" />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <PrimaryButton
                buttonText={`Pay Now $${total.toFixed(2)}`}
                onClick={handlePayment} // <-- Прив'язали нашу нову функцію
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