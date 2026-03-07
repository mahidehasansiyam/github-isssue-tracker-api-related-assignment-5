// Main Page

// Btn Toggle

let currentBtn = 'allBtn';

// assignee: 'jane_smith';
// author: 'john_doe';
// createdAt: '2024-01-15T10:30:00Z';
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.";
// id: 1;
// labels: (2)[('bug', 'help wanted')];
// priority: 'high';
// status: 'open';
// title: 'Fix navigation menu on mobile devices';
// updatedAt: '2024-01-15T10:30:00Z';


const content = document.getElementById('content');
const btnClicked = btn => {
  manageSpinner(true);
  content.innerHTML = '';
  currentBtn = btn;
  // console.log(currentBtn);
  const allBtn = document.querySelectorAll('.btns')
  allBtn.forEach((btn) => {
    btn.classList.remove('btn-primary');
  })
  document.getElementById(currentBtn).classList.add('btn-primary');

  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => showall(data.data))
  
  const showall = data => {
   
    // For all 
    if (currentBtn === 'allBtn') {
      data.forEach(item => {
        // console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `
      <div onclick="modal('${item.id}')" class="  max-w-full h-90 bg-white rounded-xl  border border-gray-200 " aria-label="Issue card">
        <!-- Top accent border -->
        <div class="h-1 w-full ${item.status === 'open' ? 'bg-green-600' : 'bg-red-600'} "></div>
      
        <!-- Content -->
        <div class="p-5">
          <div class="flex items-start justify-between">
      
            <div class="inline-flex items-center justify-center w-8 h-8 ">
              ${item.priority === 'low' ? '<img src="./assets/Open-Status.png" alt="">' : ' <img src="./assets/Closed-Status .png" alt="">'}
            </div>
      
            <!-- Priority pill -->
            <span class=" ${item.priority === 'high' ? 'text-red-500 bg-red-100' : item.priority === 'low' ? 'text-gray-600 bg-gray-200' : 'text-orange-400 bg-orange-200'} py-1 px-4 rounded-full text-sm font-semibold">
              ${item.priority}
            </span>
          </div>
      
          <!-- Title -->
          <h2 class="mt-4 text-[20px] leading-7 font-semibold text-gray-800">
            ${item.title}
          </h2>
      
          <!-- Description -->
          <p class="line-clamp-2 mt-2 text-[14px] leading-6 text-gray-500">
            ${item.description}
          </p>
      
      
          <div class="mt-4 flex items-center gap-1 flex-wrap">
            <!-- BUG -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-rose-500 bg-rose-50 border-rose-200">
              <i class="fa-solid fa-bug"></i>
              <span class=""></span> ${item.labels[0]}
            </span>
      
            <!-- HELP WANTED -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-amber-700 bg-amber-100 border-amber-200">
              <i class="fa-solid fa-life-ring"></i>
              <span class=""></span> ${item.labels[1]}
            </span>
          </div>
        </div>
      
        <!-- Divider -->
        <div class="h-px w-full bg-gray-200"></div>
      
        <!-- Footer -->
        <div class="p-5">
          <p class="text-[13px] text-gray-500">
            <span class="text-gray-400">#1</span> by <span class="font-medium text-gray-600">${item.author}</span>
          </p>
          <p class="mt-3 text-[13px] text-gray-500">${item.updatedAt}</p>
        </div>
      </div>
      `;
        manageSpinner(false);
        content.appendChild(div);
        // console.log(item);
      });
   }

    // For statue = open
    if (currentBtn === 'openBtn') {
      data.forEach(item => {
        if (item.status === 'open') {
           const div = document.createElement('div');
           div.innerHTML = `
      <div onclick="modal('${item.id}')" class="  max-w-full h-90 bg-white rounded-xl  border border-gray-200 " aria-label="Issue card">
        <!-- Top accent border -->
        <div class="h-1 w-full ${item.status === 'open' ? 'bg-green-600' : 'bg-red-600'}"></div>
      
        <!-- Content -->
        <div class="p-5">
          <div class="flex items-start justify-between">
      
            <div class="inline-flex items-center justify-center w-8 h-8 ">
              ${item.priority === 'low' ? '<img src="./assets/Open-Status.png" alt="">' : ' <img src="./assets/Closed-Status .png" alt="">'}
            </div>
      
            <!-- Priority pill -->
            <span class="${item.priority === 'high' ? 'text-red-500 bg-red-100' : item.priority === 'low' ? 'text-gray-600 bg-gray-200' : 'text-orange-400 bg-orange-200'} py-1 px-4 rounded-full text-sm font-semibold">
              ${item.priority}
            </span>
          </div>
      
          <!-- Title -->
          <h2 class="mt-4 text-[20px] leading-7 font-semibold text-gray-800">
            ${item.title}
          </h2>
      
          <!-- Description -->
          <p class="line-clamp-2 mt-2 text-[14px] leading-6 text-gray-500">
            ${item.description}
          </p>
      
      
          <div class="mt-4 flex items-center gap-1 flex-wrap">
            <!-- BUG -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-rose-500 bg-rose-50 border-rose-200">
              <i class="fa-solid fa-bug"></i>
              <span class=""></span> ${item.labels[0]}
            </span>
      
            <!-- HELP WANTED -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-amber-700 bg-amber-100 border-amber-200">
              <i class="fa-solid fa-life-ring"></i>
              <span class=""></span> ${item.labels[1]}
            </span>
          </div>
        </div>
      
        <!-- Divider -->
        <div class="h-px w-full bg-gray-200"></div>
      
        <!-- Footer -->
        <div class="p-5">
          <p class="text-[13px] text-gray-500">
            <span class="text-gray-400">#1</span> by <span class="font-medium text-gray-600">${item.author}</span>
          </p>
          <p class="mt-3 text-[13px] text-gray-500">${item.updatedAt}</p>
        </div>
      </div>
      `;
          manageSpinner(false);
           content.appendChild(div);
        }
      });
    }

    // For statue = close
   if (currentBtn === 'closedBtn') {
     data.forEach(item => {
       if (item.status === 'closed') {
          const div = document.createElement('div');
          div.innerHTML = `
      <div onclick="modal('${item.id}')" class="max-w-full h-90 bg-white rounded-xl  border border-gray-200 " aria-label="Issue card">
        <!-- Top accent border -->
        <div class="h-1 w-full ${item.status === 'open' ? 'bg-green-600' : 'bg-red-600'}"></div>
      
        <!-- Content -->
        <div class="p-5">
          <div class="flex items-start justify-between">
      
            <div class="inline-flex items-center justify-center w-8 h-8 ">
              ${item.priority === 'low' ? '<img src="./assets/Open-Status.png" alt="">' : ' <img src="./assets/Closed-Status .png" alt="">'}
            </div>
      
            <!-- Priority pill -->
            <span class=${item.priority === 'high' ? 'text-red-500 bg-red-100' : item.priority === 'low' ? 'text-gray-600 bg-gray-200' : 'text-orange-400 bg-orange-200'} py-1 px-4 rounded-full text-sm font-semibold">
              ${item.priority}
            </span>
          </div>
      
          <!-- Title -->
          <h2 class="mt-4 text-[20px] leading-7 font-semibold text-gray-800">
            ${item.title}
          </h2>
      
          <!-- Description -->
          <p class="line-clamp-2 mt-2 text-[14px] leading-6 text-gray-500">
            ${item.description}
          </p>
      
      
          <div class="mt-4 flex items-center gap-1 flex-wrap">
            <!-- BUG -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-rose-500 bg-rose-50 border-rose-200">
              <i class="fa-solid fa-bug"></i>
              <span class=""></span> ${item.labels[0]}
            </span>
      
            <!-- HELP WANTED -->
            <span
              class="flex gap-1 items-center rounded-full border px-3 py-1 text-[12px] font-semibold text-amber-700 bg-amber-100 border-amber-200">
              <i class="fa-solid fa-life-ring"></i>
              <span class=""></span> ${item.labels[1]}
            </span>
          </div>
        </div>
      
        <!-- Divider -->
        <div class="h-px w-full bg-gray-200"></div>
      
        <!-- Footer -->
        <div class="p-5">
          <p class="text-[13px] text-gray-500">
            <span class="text-gray-400">#1</span> by <span class="font-medium text-gray-600">${item.author}</span>
          </p>
          <p class="mt-3 text-[13px] text-gray-500">${item.updatedAt}</p>
        </div>
      </div>
      `;
         manageSpinner(false);
          content.appendChild(div);
       }
     });
    }
    
   
   
  };

  
  
};

// assignee: 'jane_smith';
// author: 'john_doe';
// createdAt: '2024-01-15T10:30:00Z';
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.";
// id: 1;
// labels: (2)[('bug', 'help wanted')];
// priority: 'high';
// status: 'open';
// title: 'Fix navigation menu on mobile devices';
// updatedAt: '2024-01-15T10:30:00Z';

const modalbox = document.getElementById('modal');
const modal = (id) => {
  modalbox.innerHTML = '';
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then(res => res.json())
    .then(data => {
      const item = data.data;
      let div = document.createElement('div')
      div.innerHTML = `
      <div class="max-w-xl mx-auto bg-white rounded-2xl border-gray-100 overflow-hidden">
      <div class="p-8">
        <h1 class="text-2xl font-bold text-slate-800 mb-4">${item.title}</h1>
    
        <div class="flex items-center gap-3 text-sm text-slate-500 mb-6">
          <span class="bg-emerald-500 text-white px-3 py-1 rounded-full font-medium flex items-center gap-1">
            ${item.status}
          </span>
          <span class="flex items-center gap-1">
            <span class="w-1 h-1 bg-slate-400 rounded-full"></span>
            Opened by <span class="font-medium text-slate-700 ml-1">${item.assignee}</span>
          </span>
          <span class="flex items-center gap-1">
            <span class="w-1 h-1 bg-slate-400 rounded-full"></span>
            ${item.createdAt}
          </span>
        </div>
    
        <div class="flex gap-2 mb-8">
          <span
            class="bg-rose-50 text-rose-500 border border-rose-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <i class="fa-solid fa-bug"></i> ${item.labels[0]}
          </span>
          <span
            class="bg-amber-50 text-amber-500 border border-amber-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <i class="fa-solid fa-life-ring"></i>
            ${item.labels[1]}
          </span>
        </div>
    
        <p class="text-slate-600 leading-relaxed mb-10">
          ${item.description}
        </p>
    
        <div class="bg-slate-50 rounded-xl p-6 grid grid-cols-2 gap-4">
          <div>
            <p class="text-slate-500 text-sm mb-1">Assignee:</p>
            <p class="font-bold text-slate-800">${item.author}</p>
          </div>
          <div>
            <p class="text-slate-500 text-sm mb-1">Priority:</p>
            <span class="bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
              ${item.priority}
            </span>
          </div>
        </div>
      </div>
    </div>
      `;
      modalbox.appendChild(div);

  })






  document.getElementById('my_modal').showModal();
}



const spinner = document.getElementById('spinner')
const manageSpinner = (status) => {
  if (status == true) {
    spinner.classList.remove('hidden')
    content.classList.add('hidden')
  }
  else {
    content.classList.remove('hidden');
    spinner.classList.add('hidden');
  }
}


btnClicked(currentBtn);

