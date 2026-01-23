const MobileStickyBar = ({ product, onAddToCart }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-4 z-[100] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] animate-slide-up">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold mb-1">
            Total Price
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-slate-900">Rs.</span>
            <span className="text-xl font-black text-slate-900 leading-none">
              {product.price}
            </span>
          </div>
        </div>

        <button
          onClick={onAddToCart}
          className="bg-[#133250] text-white px-8 py-3.5 rounded-2xl font-black text-sm  active:scale-95 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
