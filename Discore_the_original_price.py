def discover_original_price(discount, sale):
    return round(discount / (1 - sale / 100), 2)
