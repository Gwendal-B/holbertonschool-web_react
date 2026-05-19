/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var StudentClassConstructor = StudentClass;
var student = new StudentClassConstructor('John', 'Doe');
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ". ").concat(lastName); };
console.log(director1);
console.log(teacher3);
console.log(printTeacher('John', 'Doe'));
console.log(student.displayName());
console.log(student.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQTBCQTtJQUNFLHNCQUNVLFNBQWlCLEVBQ2pCLFFBQWdCO1FBRGhCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUN2QixDQUFDO0lBRUoscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sdUJBQXVCLEdBQXVCLFlBQVksQ0FBQztBQUNqRSxJQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUUzRCxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUdGLElBQU0sU0FBUyxHQUFjO0lBQzNCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQXlCLFVBQ3pDLFNBQWlCLEVBQ2pCLFFBQWdCLElBQ0wsaUJBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsRUFBckMsQ0FBcUMsQ0FBQztBQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nXG4gICkge31cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuY29uc3QgU3R1ZGVudENsYXNzQ29uc3RydWN0b3I6IFN0dWRlbnRDb25zdHJ1Y3RvciA9IFN0dWRlbnRDbGFzcztcbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzQ29uc3RydWN0b3IoJ0pvaG4nLCAnRG9lJyk7XG5cbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKFxuICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgbGFzdE5hbWU6IHN0cmluZ1xuKTogc3RyaW5nID0+IGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XG5cbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoJ0pvaG4nLCAnRG9lJykpO1xuY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=