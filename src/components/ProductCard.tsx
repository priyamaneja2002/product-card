"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag } from 'lucide-react';
import tshirtImage from '@/assets/images/product-image.png';
import Image from 'next/image';

const ProductCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#A3FFD6');
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = [
    { id: 'mint', hex: '#A3FFD6' },
    { id: 'blue', hex: '#82B1FF' },
    { id: 'red', hex: '#FF8A80' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const sharedTransition = { type: "spring", stiffness: 300, damping: 30 } as const;;
  const glassClasses = "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-glass-outer shadow-glass-inner rounded-[2.5rem] overflow-hidden isolate";

  return (
    <div className="flex items-center justify-center p-6 font-sans">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${glassClasses} relative ${isExpanded ? 'w-full max-w-md' : 'w-80'}`}
        transition={sharedTransition}
      >
        <motion.div layout className="p-4 overflow-hidden">
          <motion.div 
            layout 
            className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400"
            transition={sharedTransition}
          >
            <motion.div layout className="absolute inset-0" transition={sharedTransition}>
              <Image 
                src={tshirtImage} 
                alt="Premium T-Shirt" 
                placeholder="blur" 
                fill
                className={`object-cover ${!isExpanded ? 'cursor-pointer': ''}`}
                onClick={() => !isExpanded && setIsExpanded(true)}
              />
            </motion.div>
            
            {!isExpanded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 right-4 flex flex-col gap-2"
              >
                <button className="bg-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer text-black"><Heart size={20} /></button>
                <button className="bg-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer text-black"><ShoppingBag size={20} /></button>
              </motion.div>
            )}

            {isExpanded && (
              <motion.button 
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full z-10 hover:bg-white cursor-pointer"
              >
                <X size={20} className="text-black" />
              </motion.button>
            )}
          </motion.div>
        </motion.div>

        <div className="px-8 pb-8 text-white">
          <motion.div 
            layout="position" 
            className={`flex justify-between items-baseline mb-4 gap-4 ${!isExpanded ? 'cursor-pointer': ''}`} 
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={sharedTransition}
          >
            <h3 className="text-2xl font-semibold tracking-tight">Acid Wash T-Shirt</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through text-sm font-medium">$7.99</span>
              <span className="text-2xl font-bold tracking-tight">$6.99</span>
            </div>
          </motion.div>

          {/* Set mode to 'popLayout' to prevent height jumping */}
          <AnimatePresence mode="popLayout">
            {isExpanded ? (
              <motion.div
                key="expanded"
                // REMOVED height: 0 and height: 'auto'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={sharedTransition}
                className="space-y-8 mt-4"
              >
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">Description</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    This premium piece is crafted from a high-density cotton blend, 
                    offering a soft-touch feel and a relaxed, architectural fit.
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">Select Color</h4>
                  <div className="flex gap-6 items-center">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.hex)}
                        style={{ backgroundColor: color.hex }}
                        className={`w-7 h-7 rounded-full transition-all duration-300 cursor-pointer ring-offset-[#121212] ${
                          selectedColor === color.hex 
                          ? 'ring-2 ring-white ring-offset-4 opacity-100' 
                          : 'ring-2 ring-transparent ring-offset-4 opacity-40 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">Select Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button 
                        key={size} 
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 min-w-[50px] py-2 border rounded-xl text-[10px] font-bold transition-all duration-300 cursor-pointer ${
                          selectedSize === size 
                          ? 'bg-white text-black border-white' 
                          : 'border-white/20 text-white hover:bg-white/10'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-xl cursor-pointer"
                >
                  Add To Bag — {selectedSize}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                key="collapsed"
                layout 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={sharedTransition}
              >
                <div className="flex gap-4 items-center">
                  {colors.map((color) => (
                    <button 
                      key={color.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedColor(color.hex);
                      }}
                      style={{ backgroundColor: color.hex }}
                      className={`w-5 h-5 rounded-full transition-all duration-500 cursor-pointer ring-offset-[#121212] ${
                        selectedColor === color.hex 
                        ? 'ring-2 ring-white ring-offset-2 opacity-100' 
                        : 'ring-2 ring-transparent ring-offset-2 opacity-40 hover:opacity-100'
                      }`} 
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;