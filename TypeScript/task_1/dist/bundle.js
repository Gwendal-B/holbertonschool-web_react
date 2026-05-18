/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ". ").concat(lastName); };
console.log(printTeacher('John', 'Doe'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFNdkIsSUFBTSxZQUFZLEdBQXlCLFVBQ3pDLFNBQWlCLEVBQ2pCLFFBQWdCLElBQ0wsaUJBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsRUFBckMsQ0FBcUMsQ0FBQztBQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5cbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChcbiAgZmlyc3ROYW1lOiBzdHJpbmcsXG4gIGxhc3ROYW1lOiBzdHJpbmdcbik6IHN0cmluZyA9PiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4gJHtsYXN0TmFtZX1gO1xuXG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoJ0pvaG4nLCAnRG9lJykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9