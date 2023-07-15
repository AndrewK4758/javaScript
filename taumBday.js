const taumBday = (b, w, bc, wc, z) => {
    bc = BigInt(bc);
    wc = BigInt(wc);
    b = BigInt(b);
    w = BigInt(w);
    z = BigInt(z);
    
    if((bc + z) < wc) {
        return (bc + z)*w + bc*b;
    } else if ((wc + z) < bc) {
        return (wc + z)*b + wc*w;
    } else {
        return wc*w + bc*b;
    }
    
};

taumBday(7,7,4,2,1);

/*
b = black gifts
w = white gifts
bc = cost of black gifts
wc = cost of white gifts
z = cost to convert a black to white or white to black
*/