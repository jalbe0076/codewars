// In a computer operating system that uses paging for virtual memory management, page replacement 
// algorithms decide which memory pages to page out when a page of memory needs to be allocated. 
// Page replacement happens when a requested page is not in memory (page fault) and a free page cannot 
// be used to satisfy the allocation, either because there are none, or because the number of free pages 
// is lower than some threshold.

// The FIFO page replacement algorithm
// The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires 
// little bookkeeping on the part of the operating system. The idea is obvious from the name: the operating 
// system keeps track of all the pages in memory in a queue, with the most recent arrival at the back, 
// and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. 
// Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

// Your task is to implement this algorithm. The fifo function will take two parameters as input: 
// the number of maximum pages that can be kept in memory at the same time n and a reference list 
// containing numbers. Every number represents a page request for a specific page (you can see this 
// number as the unique ID of a page). The expected output is the status of the memory after the 
// application of the algorithm. Note that when a page is inserted in the memory, it stays at the same 
// position until it is removed from the memory by a page fault.

// Example:
// Given:
// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],
//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].

// So, at the end we have the list [4, 5, 3], which is what you have to return. 
// If not all the slots in the memory get occupied after applying the algorithm, fill the remaining 
// slots (at the end of the list) with -1 to represent emptyness (note that the IDs will always be >= 1).



// MY ORIGINAL SOLUTION
// function fifo(n, referenceList) {
//     var memoryIndex = [];
//     var count = 0;
    
//     for(var j = 0; j < n; j++) {
//       memoryIndex.push(-1);
//     }
    
//     for(var i = 0; i < referenceList.length; i++) {
//       if(memoryIndex.includes(referenceList[i]) === false) {
//         memoryIndex.splice(count, 1, referenceList[i]);
//         if((n - 1) === count) {   // -1 because index starts at 0 and we want the number of elements in the memory to equal 0
//           count = -1;
//         }
//         count++;
//       }
//     }
//       return memoryIndex; 
// }



// REFACTOR
// function fifo(n, referenceList) {
//     var memoryIndex = Array(n).fill(-1);
//     var count = 0;
    
//     for(var i = 0; i < referenceList.length; i++) {
//       if(memoryIndex.includes(referenceList[i]) === false) {
//         memoryIndex.splice(count, 1, referenceList[i]);
//         if((n - 1) === count) {   
//           count = -1;
//         }
//         count++;
//       }
//     }
//       return memoryIndex; 
// }



// REFACTOR #2
function fifo(n, referenceList) {
    var memoryIndex = Array(n).fill(-1);
    var count = 0;
    
    for(var i = 0; i < referenceList.length; i++) {
      if(memoryIndex.includes(referenceList[i]) === false) {
        memoryIndex.splice(count, 1, referenceList[i]);
        count = (count + 1) % n;
      }
    }
      return memoryIndex; 
}