function Item(name, qty, favorite, isOut, edit){
    this.favorite = favorite || false;
    this.isOut = isOut || false;
    this.name = name || '';
    this.qty = qty || null;
    this.edit = edit || false;
}