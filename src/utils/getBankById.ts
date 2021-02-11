import { initialState } from '@context/configuration/context';
import { Bank } from "../types";
import { getCookies } from "./getCookies";
import { validateBank } from "./validateBank";

export const getBankById = async (id: string): Promise<Bank> => {
  let bank, response;
  try {
    response = await fetch(`http://localhost:3000/api/bank/get/${id}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'lpd8_token': getCookies().lpd8_token,
      },
    });
    bank = await response.json();
  } catch (error) {
    bank = initialState
  }

  return validateBank(bank);
}