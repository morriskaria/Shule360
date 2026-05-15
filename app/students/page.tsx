import React from 'react'

export default function StudentsPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-border-muted dark:border-outline-variant fixed top-0 left-0 z-40 w-full">
        <div className="flex justify-between items-center px-lg py-md w-full max-w-container-max mx-auto">
          <div className="flex items-center gap-md">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center overflow-hidden">
              <img
                alt="School Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshCJ1rMpN-0d8kuUkx5G0qzgXkJ94U29uXty0GcCTwGW5IbCY8YXEGfHCc7AECI0uXe_u1WiduVE_tJv-AZkxyZk2mwHRRpo55yGfg_yTHn0YDBBs0OqQgfvjMBUfTBDUsdVIYkeeKr7TDOUDkwEAuVNqp4d17ZmZ0PH_aWvtKhp0dlmJfPtkvuuUdZr1ZBL9XONGDFonf-rq1xChhtgi5xEcNczsMuzUM51jWQIeulaiZwb0mx-7zD6xOoF0U6cGfqmev8WvlgQ"
              />
            </div>
            <h1 className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed">Shule360</h1>
          </div>
          <div className="hidden md:flex items-center gap-xl">
            <nav className="flex gap-lg">
              <a className="text-on-surface-variant dark:text-outline-variant font-label-sm text-label-sm hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors px-2 py-1 rounded" href="#">Dashboard</a>
              <a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary font-label-sm text-label-sm px-2 py-1" href="#">Academics</a>
              <a className="text-on-surface-variant dark:text-outline-variant font-label-sm text-label-sm hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors px-2 py-1 rounded" href="#">Finance</a>
              <a className="text-on-surface-variant dark:text-outline-variant font-label-sm text-label-sm hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors px-2 py-1 rounded" href="#">Settings</a>
            </nav>
            <div className="flex items-center gap-md">
              <button className="material-symbols-outlined text-on-surface-variant">notifications</button>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                <img alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK_gl_vpFeHkAHjhsgmhB2cmJ8SxFOcxNyeXjpke3BXbaFD73C_0s6GAfATJiRbusz0SEpDNL08oeR7plB6A-2K11x6wJDSk-7YAoR8l-pyYSl_Obkbbz7Aqao7mBxSGzf-8utUa6ViZZZHuZ9IUKs47W6LtzzLK1uhwNtTZY4EXPzvAqk-DvXsLelv1iJ2gAMdeYwPt13e2nKNjE7k73NiPEVNRqbBlTCyDy_bgAzuunIIDgRYySbkMrNFxUWVmyFVxzPE0KmHb4"/>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">notifications</span>
          </div>
        </div>
      </header>

      {/* Side Navigation Drawer (Desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[260px] bg-surface dark:bg-on-primary-container border-r border-border-muted dark:border-outline-variant flex-col gap-md p-md z-30 pt-24">
        <div className="flex items-center gap-md mb-xl px-2">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden flex-shrink-0">
            <img alt="Principal Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--CtO_u1JXZhrxjdBF29tih_qUpS3gEOZL_wImYZNmT5Hkt7wP9yyZOXr3RK_gU15Xvrah5J47rHQpGcDxhpBJhTNqb013eRRzGNR3sO2Mh8bH_W05z1SWApu-d1NU5nD-sOjR6znVRinSCRVXJHqw5VkVJFZ8Y3hhvWGWGf9vjI1ngi4kjs84wl7o50FLeMAC0nWRH9FpLQIjdL_wKM4JGEOL5Y_0rDzfgc6wbplOXazb37TaPO8WlCdXpwfKnhyIO9Y-gz1ukU"/>
          </div>
          <div>
            <h3 className="font-title-md text-title-md text-on-surface">Maina Kamau</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Administrator</p>
          </div>
        </div>
        <nav className="flex flex-col gap-sm">
          <a className="flex items-center gap-md p-md rounded-xl text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-all" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-xl text-primary dark:text-primary-fixed font-bold border-r-4 border-primary bg-surface-container-low translate-x-1 transition-transform" href="#">
            <span className="material-symbols-outlined">school</span>
            <span className="font-body-md text-body-md">Academics</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-xl text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-all" href="#">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body-md text-body-md">Finance</span>
          </a>
          <a className="flex items-center gap-md p-md rounded-xl text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-surface-variant transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
        </nav>
        <div className="mt-auto px-2">
          <div className="p-md bg-primary-container text-on-primary-container rounded-xl">
            <p className="font-label-sm text-label-sm uppercase opacity-70">Current School</p>
            <p className="font-title-md text-title-md mt-1">Hillside Academy</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-[260px] pt-24 pb-32 md:pb-12 px-md md:px-lg min-h-screen">
        <div className="max-w-container-max mx-auto">
          {/* Header & Search */}
          <div className="mb-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
              <div>
                <h2 className="font-display-lg text-display-lg text-primary">Student Directory</h2>
                <p className="text-on-surface-variant font-body-lg text-body-lg mt-1">Greenpark Academy | Academic Year 2024</p>
              </div>
              <button className="bg-primary text-on-primary px-lg py-md rounded-xl font-title-md text-title-md flex items-center gap-sm self-start md:self-auto hover:opacity-90 transition-opacity shadow-md">
                <span className="material-symbols-outlined">person_add</span>
                Add Student
              </button>
            </div>
            {/* Bento Style Filters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
              <div className="md:col-span-8 bg-surface-container-lowest border border-border-muted p-md rounded-xl shadow-sm flex items-center gap-md">
                <span className="material-symbols-outlined text-outline">search</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-body-lg font-body-lg" placeholder="Search by name, admission number, or parent phone..." type="text" />
              </div>
              <div className="md:col-span-4 bg-surface-container-lowest border border-border-muted p-md rounded-xl shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-outline">filter_list</span>
                  <select className="bg-transparent border-none focus:ring-0 text-body-md font-body-md">
                    <option>All Classes</option>
                    <option>Form 1 North</option>
                    <option>Form 2 South</option>
                    <option>Form 3 East</option>
                    <option>Form 4 West</option>
                  </select>
                </div>
                <button className="text-primary font-label-sm text-label-sm hover:underline">Clear</button>
              </div>
            </div>
          </div>

          {/* Student List Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-md">
            {/* Student Card 1 */}
            <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-md hover:shadow-md transition-shadow flex gap-md items-start group">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Student 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwpS01Bur8ih2TIWLx9--tNOIByQWzHJNHrL4xfpldY4GfnJFGU7PKJeJtYJq8OO3gtOsOd8dcH15BuTG9YemrOpPfG0cGlqbS9eketJBIoZ5RH3NGrtOIsK9z50LNcX8ccgEQfliJBkC8ngZD1pv060EZtcMXz3FCER1I6BXpynWLdj0Q_G0u-cUf_IsMxzYStVpT-Uwh9Ch3jPjVDhmokCR7JEOPDsKrEAnmOCfy4gB_SuZsnIF9q16OSaHiHwx8J6q-VGgVQMg" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary truncate">Kamau Maina Joseph</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ADM: #GP-2024-0892</p>
                  </div>
                  <span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span>
                </div>
                <div className="mt-md flex flex-wrap gap-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    <span className="font-body-md text-body-md">Form 4 East</span>
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    <span className="font-body-md text-body-md">Fees Paid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Card 2 */}
            <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-md hover:shadow-md transition-shadow flex gap-md items-start group">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Student 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2WmK_NZm_HJyHjmAtV3howtqyio9hx1tSdL5KKXwddy3Es8BHxEGTRJgLcbYs2S0XtXZzPLIQAjbilvFKvTpN8Zx1TTphTd2kZm0zDbv32ewIxiMKrWHSbRYDp3hUaY9_ZsmWhMzOmSbpab2VRzb6VHSQc_qG2-nO9hRgUIu70iH4MviSka7T0SOyl6z7XI_3MiyCaEuUuCVYdPf4rk-7UPq7eV1lyjY4pQzKNJe4GRzMSR7wRiCKwvgEmGBk-k2ROiEPGU_SpgI" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary truncate">Amina Wanjiru</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ADM: #GP-2024-1104</p>
                  </div>
                  <span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span>
                </div>
                <div className="mt-md flex flex-wrap gap-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    <span className="font-body-md text-body-md">Form 2 North</span>
                  </div>
                  <div className="flex items-center gap-xs text-error-crimson">
                    <span className="material-symbols-outlined text-[18px]">warning</span>
                    <span className="font-body-md text-body-md">Fees Arrears</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Card 3 */}
            <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-md hover:shadow-md transition-shadow flex gap-md items-start group">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Student 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-YoFpkKb0DFwkhml3heBz89WK4egiC55uqJxYX_U8tLn5-dZYNYldlDJMwfzGiymp-3HNaJih-0LRcw17vbz22P2gmXMzszqNG8CrUxU1C6T86vCQD4j1WjYxOlWfmvAykbbkM9nJ2nsNM_ehYZ3WbudnyBaFQbYrte8FMAGKyagktZH_h9_U-lPF1q7jwQ1ISHBfqQZpL7CBYzE1_62zpanJUPJ-5AeZB-69xxzW1v9hKn3JxyOu-YSG8BZ1LfSCxJNIQFdFYsg" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary truncate">Brian Omondi</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ADM: #GP-2023-0451</p>
                  </div>
                  <span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span>
                </div>
                <div className="mt-md flex flex-wrap gap-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    <span className="font-body-md text-body-md">Form 3 South</span>
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    <span className="font-body-md text-body-md">Fees Paid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Card 4 */}
            <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-md hover:shadow-md transition-shadow flex gap-md items-start group">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Student 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0lf1iHiOWrMZFalJnFsCOzOD4HaGfUEvuw8t7Zys5xB6WxZIArwthFx-2Fv7wWQL9Tv5oJlEx_ASIIpD1o_3kUiQqr-L_r8K4qWqI4aZUCEumtzlocFguPcsDgrJFaSXV-2NGALl1elttnBNtdbrQ9R0lj3bNtAvfwP0pIQNQ0mGVjsIHevfTv12Rpaw_sz9idB2h1thk1anfEdk5863C9vCnrvMUqYARWSdMWviM-7vZeSY8PKwgtD3sEtlrSRM3Ao1ACr_Q7TY" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary truncate">Zainab Hassan</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ADM: #GP-2024-2219</p>
                  </div>
                  <span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span>
                </div>
                <div className="mt-md flex flex-wrap gap-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    <span className="font-body-md text-body-md">Form 1 North</span>
                  </div>
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                    <span className="font-body-md text-body-md">Scholarship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Card 5 */}
            <div className="bg-surface-container-lowest border border-border-muted rounded-xl p-md hover:shadow-md transition-shadow flex gap-md items-start group">
              <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img alt="Student 5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0O3GYxAh06rfrZEadc6cyDw6p_pGDESPzV7-7Nli6pCZ5Y4ZLOzM99bWMO32eQ50JIufk89cv_xFjxgqmn1r0g9tG6fDPypL84A6Tq_cNJTH1q47JON90xsS64SzCmYPqFL2Qo4dr8RtkJ5BreHzM42WPvywbydQ9gzqAxITb7o2vx5zgtLQchZe3CQeXvQG9WFVm1BWW-a2YTN1Ic9GVpEytrwqb5MzbSNa9a7msN5_ck_RtX2sf8Me1cQhebBDBq2Biws06wlA" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary truncate">David Kiprop</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ADM: #GP-2024-3312</p>
                  </div>
                  <span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span>
                </div>
                <div className="mt-md flex flex-wrap gap-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                    <span className="font-body-md text-body-md">Form 4 West</span>
                  </div>
                  <div className="flex items-center gap-xs text-warning-amber">
                    <span className="material-symbols-outlined text-[18px]">pending</span>
                    <span className="font-body-md text-body-md">Partial Payment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty "Add" Card */}
            <div className="bg-surface-container-low border border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer min-h-[140px]">
              <span className="material-symbols-outlined text-4xl mb-sm">add_circle</span>
              <p className="font-title-md text-title-md">Register New Student</p>
              <p className="font-label-sm text-label-sm opacity-70">20 slots remaining for Form 1</p>
            </div>
          </div>

          {/* Table View (Hidden on mobile) */}
          <div className="mt-xl hidden lg:block overflow-hidden rounded-xl border border-border-muted shadow-sm bg-surface-container-lowest">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-border-muted">
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">ADM NO.</th>
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">FULL NAME</th>
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">CLASS</th>
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">PARENT CONTACT</th>
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">STATUS</th>
                  <th className="px-md py-md font-label-sm text-label-sm text-on-surface-variant">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-muted">
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="px-md py-md font-data-mono text-data-mono">GP-2024-0892</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-variant flex-shrink-0 overflow-hidden">
                        <img alt="Student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQVxSid4L5WzynPh2tMOk79J2246-XcVtrEWxA22ltsoGcRrDrcx-hXGfugk-bJ0_JtBb6uGYmd59rEFUSNna2aOPjZuysVPL9u3Bj2GNkT8rwP1tvh3TQfhAdBf1r6TkoSbOqx45pfNJumSEa3GnwxyOvyXq-1g-TyAW2bvIyoAqNcZMl3gcJwi0HuxDmlG1rXbU96MnvMLz_WcVNblkHiqjCZLPMoA-k1qoVY6IRPshmg2OZCTtLCpFyqN0MGNdH5lKbmob7eUI"/>
                      </div>
                      <span className="font-body-md text-body-md font-semibold">Kamau Maina Joseph</span>
                    </div>
                  </td>
                  <td className="px-md py-md font-body-md text-body-md">Form 4 East</td>
                  <td className="px-md py-md font-body-md text-body-md">+254 712 345 ***</td>
                  <td className="px-md py-md"><span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span></td>
                  <td className="px-md py-md">
                    <button className="text-primary hover:bg-surface-container-high p-1 rounded-full"><span className="material-symbols-outlined">edit</span></button>
                    <button className="text-on-surface-variant hover:bg-surface-container-high p-1 rounded-full ml-2"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
                <tr className="bg-surface-container-low hover:bg-surface-container transition-colors">
                  <td className="px-md py-md font-data-mono text-data-mono">GP-2024-1104</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-variant flex-shrink-0 overflow-hidden">
                        <img alt="Student" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNE86rA-y21UZTH69zDqGEqrGsuUx0_EiupJI7SgbcUY9ckEDyUcXZQHH4amobKDrXj3iqxrqpujARxlLayyGwbWOBVaX4K8L691NbOgfR-nDqJA7_PIMVF3Vn6kVnPR68uKL7GbHaft0tyBdy9Klfs6QRl7zrgrRgocQD6J8b5ck8W4iEdpE3s1J4xcX62XPeRkGnuunyRYBizmuDGpxCXKz401l4DTQDoo87g2rYS9fEEpKjtHlrodO_o6vSLL-MbZtLuTnuUR4"/>
                      </div>
                      <span className="font-body-md text-body-md font-semibold">Amina Wanjiru</span>
                    </div>
                  </td>
                  <td className="px-md py-md font-body-md text-body-md">Form 2 North</td>
                  <td className="px-md py-md font-body-md text-body-md">+254 722 987 ***</td>
                  <td className="px-md py-md"><span className="bg-sage-success text-sage-text px-sm py-xs rounded-full font-label-sm text-label-sm">Active</span></td>
                  <td className="px-md py-md">
                    <button className="text-primary hover:bg-surface-container-high p-1 rounded-full"><span className="material-symbols-outlined">edit</span></button>
                    <button className="text-on-surface-variant hover:bg-surface-container-high p-1 rounded-full ml-2"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-md flex justify-between items-center bg-surface-container-low">
              <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-10 of 482 students</p>
              <div className="flex gap-sm">
                <button className="px-md py-1 border border-border-muted rounded bg-white font-label-sm text-label-sm">Previous</button>
                <button className="px-md py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm shadow-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-surface-container-lowest dark:bg-inverse-surface border-t border-border-muted dark:border-outline-variant shadow-md md:hidden z-50">
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed rounded-xl px-4 py-1 scale-95 transition-all" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: `'FILL' 1`}}>group</span>
          <span className="font-label-sm text-label-sm">Students</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-label-sm text-label-sm">Fees</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1" href="#">
          <span className="material-symbols-outlined">menu</span>
          <span className="font-label-sm text-label-sm">Menu</span>
        </a>
      </nav>
    </div>
  )
}
