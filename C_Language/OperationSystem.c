#include <stdio.h>
#include < fcntl.h>
// For open() system call
#include <unistd.h> // For read() and close() system calls
int main i
// Open the file
int fd = open("example.txt", O_RDONLY);
if (fd == -1) {
perror("Error opening the file");
return 1;

Example of a System Call
// Buffer to store the data
char buffer[100]; ssize_t bytesRead;
// Read up to 100 bytes from the file
bytes Read = read(fd, buffer, sizeof(buffer) - 1);
if (bytesRead == -1) {
perror("Error reading the file");
close(fd);
return 1;

// Null-terminate the buffer to print it as a string
buffer[bytesRead] = '\0';
// Print the contents read
printf("Data read from the file:\n%s\n", buffer);
// Close the file
close(fd);
return 0;
