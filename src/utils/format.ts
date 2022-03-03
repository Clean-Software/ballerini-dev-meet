const formatNumber = (num: number) => { 
    return num.toString().padStart(2, "0");
}

export { formatNumber };