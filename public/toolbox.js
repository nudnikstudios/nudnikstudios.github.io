//
// QuickSort Function
//
function quickSort(arr, start, end) {
    if (start >+ end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

//
// InsertionSort to be used within bucket sort
//
function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }

//
//Bucket Insertion Sort
//
function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
    // Generating bucket sizes automatically
    let bucketVolume = floor(Math.sqrt(array.length));
    if (bucketVolume % 2 == 0) {
        bucketVolume = bucketVolume / 2;
        //console.log(bucketVolume);
    }

    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || bucketVolume;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }

//
//Sleep/Wait Timer
//
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//
//'Tick' Timer
//
function tickTimer() {
    timer = 0;
    if (frameCount % frameRate == 0)  {
        timer += 1;
    }
}
