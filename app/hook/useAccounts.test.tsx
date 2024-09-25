import { renderHook } from '@testing-library/react-hooks';
import { GetListAccountWithTag, GetListWithVoucher } from '@/app/services/FetchRequest';
import { useAccounts } from './useAccounts';
import { Account } from '../types/Account';

// Simula el módulo FetchRequest
jest.mock('@/app/services/FetchRequest');

const mockAccountsData: Account[] = [
  // ... tus datos de prueba
];

const mockVouchersData: Account[] = [
  ...mockAccountsData
];

beforeEach(() => {
  (GetListAccountWithTag as jest.Mock).mockResolvedValue(mockAccountsData);
  (GetListWithVoucher as jest.Mock).mockResolvedValue(mockVouchersData);
});

afterEach(() => {
  jest.clearAllMocks();
});

test('should initialize with correct default values', () => {
  const { result } = renderHook(() => useAccounts('exampleTag'));

  expect(result.current.ListAccountsByTag).toEqual([]);
  expect(result.current.ListAccountWithVoucher).toEqual([]);
  expect(result.current.loading).toBe(true);
});

test('should fetch and set accounts data correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAccounts('exampleTag', 1, 4));

  await waitForNextUpdate();

  expect(GetListAccountWithTag).toHaveBeenCalledWith('exampleTag', 1, 4, 'location', 'asc');
  expect(GetListWithVoucher).toHaveBeenCalledWith(1, 4, 'name', 'desc');
  expect(result.current.ListAccountsByTag).toEqual(mockAccountsData);
  expect(result.current.ListAccountWithVoucher).toEqual(mockVouchersData);
  expect(result.current.loading).toBe(false);
});

test('should handle errors and set loading to false', async () => {
  (GetListAccountWithTag as jest.Mock).mockRejectedValue(new Error('Fetch error'));
  const { result, waitForNextUpdate } = renderHook(() => useAccounts('exampleTag', 1, 4));

  await waitForNextUpdate();

  expect(result.current.ListAccountsByTag).toEqual([]);
  expect(result.current.ListAccountWithVoucher).toEqual([]);
  expect(result.current.loading).toBe(false);
});