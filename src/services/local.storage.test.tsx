import { getDataLocalStorage, persistDataLocalStorage } from './local.storage';

type TestItem = { name: string };
const testItem = { name: 'Test' };

describe('Given local.storage functions', () => {
    describe('When we use getDataLocalStorage with data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest
                .fn()
                .mockReturnValue(JSON.stringify([testItem]));
        });
        test('Web API function should be call', () => {
            const result = getDataLocalStorage<TestItem>('test');
            expect(result).toEqual([testItem]);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use getDataLocalStorag without data in localStorage', () => {
        beforeEach(() => {
            Storage.prototype.getItem = jest.fn().mockReturnValue(null);
        });
        test('Web API function should be call', () => {
            const result = getDataLocalStorage<TestItem>('test');
            expect(result).toEqual(null);
            expect(Storage.prototype.getItem).toHaveBeenCalledWith('test');
        });
    });
    describe('When we use persistDataLocalStorage', () => {
        beforeEach(() => {
            Storage.prototype.setItem = jest.fn();
        });
        test('Web API function should be call', () => {
            persistDataLocalStorage<TestItem>('test', [testItem]);
            expect(Storage.prototype.setItem).toHaveBeenCalledWith(
                'test',
                JSON.stringify([testItem])
            );
        });
    });
});
