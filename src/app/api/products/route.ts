import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET_PRODUCTS(request: NextRequest) {
    const products = await axios('https://fakestoreapi.com/products');

    return products;
}