import { reactive } from 'vue'

/**
 * Shared schedule entries — singleton reactive object so both
 * ScheduleView and NewScheduleWeekView read/write the same state.
 * Key format: `${year}|${section}|${timeIn} - ${timeOut}|${day}`
 */
export const entries = reactive({
  // ── 1st Year · Section 1 ──
  '1st Year|Section 1|7:00 AM - 11:00 AM|Monday': {
    teacher: 'Prof. Jhon', subject: 'Data Structures', room: 'Cl.1',
    year: '1st Year', section: 'Section 1', slot: '7:00 AM - 11:00 AM',
    timeIn: '7:00 AM', timeOut: '11:00 AM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '1st Year|Section 1|12:00 PM - 2:00 PM|Monday': {
    teacher: 'Prof. Balong', subject: 'Networking', room: 'Room 401',
    year: '1st Year', section: 'Section 1', slot: '12:00 PM - 2:00 PM',
    timeIn: '12:00 PM', timeOut: '2:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-yellow', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '1st Year|Section 1|1:00 PM - 4:00 PM|Wednesday': {
    teacher: 'Prof. Aira', subject: 'Operating Systems', room: 'Cl.2',
    year: '1st Year', section: 'Section 1', slot: '1:00 PM - 4:00 PM',
    timeIn: '1:00 PM', timeOut: '4:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '1st Year|Section 1|5:00 PM - 7:00 PM|Friday': {
    teacher: 'Prof. Jolo', subject: 'Algorithms', room: 'Cl.3',
    year: '1st Year', section: 'Section 1', slot: '5:00 PM - 7:00 PM',
    timeIn: '5:00 PM', timeOut: '7:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  // ── 1st Year · Section 2 ──
  '1st Year|Section 2|8:00 AM - 11:00 AM|Tuesday': {
    teacher: 'Prof. Gab', subject: 'Web Development', room: 'Cl.4',
    year: '1st Year', section: 'Section 2', slot: '8:00 AM - 11:00 AM',
    timeIn: '8:00 AM', timeOut: '11:00 AM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '1st Year|Section 2|2:00 PM - 5:00 PM|Thursday': {
    teacher: 'Prof. Daniella', subject: 'Database Management', room: 'Room 402',
    year: '1st Year', section: 'Section 2', slot: '2:00 PM - 5:00 PM',
    timeIn: '2:00 PM', timeOut: '5:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-yellow', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '1st Year|Section 2|7:00 AM - 10:00 AM|Saturday': {
    teacher: 'Prof. Aj', subject: 'Software Engineering', room: 'Cl.1',
    year: '1st Year', section: 'Section 2', slot: '7:00 AM - 10:00 AM',
    timeIn: '7:00 AM', timeOut: '10:00 AM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  // ── 2nd Year · Section 1 ──
  '2nd Year|Section 1|9:00 AM - 12:00 PM|Monday': {
    teacher: 'Prof. Jhon', subject: 'Computer Architecture', room: 'Cl.2',
    year: '2nd Year', section: 'Section 1', slot: '9:00 AM - 12:00 PM',
    timeIn: '9:00 AM', timeOut: '12:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '2nd Year|Section 1|1:00 PM - 3:00 PM|Wednesday': {
    teacher: 'Prof. Balong', subject: 'Discrete Mathematics', room: 'Room 403',
    year: '2nd Year', section: 'Section 1', slot: '1:00 PM - 3:00 PM',
    timeIn: '1:00 PM', timeOut: '3:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-yellow', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '2nd Year|Section 1|4:00 PM - 7:00 PM|Friday': {
    teacher: 'Prof. Aira', subject: 'Programming 2', room: 'Cl.4',
    year: '2nd Year', section: 'Section 1', slot: '4:00 PM - 7:00 PM',
    timeIn: '4:00 PM', timeOut: '7:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  // ── 2nd Year · Section 2 ──
  '2nd Year|Section 2|7:00 AM - 10:00 AM|Tuesday': {
    teacher: 'Prof. Gab', subject: 'Programming 1', room: 'Cl.3',
    year: '2nd Year', section: 'Section 2', slot: '7:00 AM - 10:00 AM',
    timeIn: '7:00 AM', timeOut: '10:00 AM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '2nd Year|Section 2|12:00 PM - 2:00 PM|Thursday': {
    teacher: 'Prof. Jolo', subject: 'Algorithms', room: 'Room 404',
    year: '2nd Year', section: 'Section 2', slot: '12:00 PM - 2:00 PM',
    timeIn: '12:00 PM', timeOut: '2:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-yellow', addedAt: 'Feb 23, 2026 08:00 AM',
  },
  '2nd Year|Section 2|3:00 PM - 6:00 PM|Saturday': {
    teacher: 'Prof. Daniella', subject: 'Software Engineering', room: 'Cl.1',
    year: '2nd Year', section: 'Section 2', slot: '3:00 PM - 6:00 PM',
    timeIn: '3:00 PM', timeOut: '6:00 PM',
    parallel: false, parallelGroupId: null, parallelCount: 1, parallelSlots: [],
    color: 'color-green', addedAt: 'Feb 23, 2026 08:00 AM',
  },
})

export const years    = ['1st Year', '2nd Year', '3rd Year', '4th Year']
export const sections = ['Section 1', 'Section 2', 'Section 3', 'Section 4']
export const days     = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM',
]

export const timeOptions = [
  '7:00 AM','7:30 AM','8:00 AM','8:30 AM','9:00 AM','9:30 AM',
  '10:00 AM','10:30 AM','11:00 AM','11:30 AM',
  '12:00 PM','12:30 PM',
  '1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM',
  '4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM',
]

export const teacherOptions = [
  'Prof. Jhon', 'Prof. Balong', 'Prof. Aira', 'Prof. Gab',
  'Prof. Daniella', 'Prof. Jolo', 'Prof. Aj',
]

export const subjectOptions = [
  'Data Structures', 'Networking', 'Operating Systems', 'Database Management',
  'Web Development', 'Software Engineering', 'Algorithms', 'Computer Architecture',
  'Discrete Mathematics', 'Programming 1', 'Programming 2',
]

export const roomOptions = [
  'Cl.1', 'Cl.2', 'Cl.3', 'Cl.4',
  'Room 401', 'Room 402', 'Room 403', 'Room 404',
  'Room 405', 'Room 406', 'Room 407', 'Room 408',
]

export function colorForRoom(room) {
  if (!room) return null
  return room.startsWith('Cl.') ? 'color-green' : 'color-yellow'
}

/** Convert "7:00 AM" or "1:30 PM" → total minutes since midnight */
export function parseTime(t) {
  if (!t) return 0
  const parts = t.trim().split(' ')
  const period = parts[1]
  let [h, m] = parts[0].split(':').map(Number)
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return h * 60 + m
}

/** How many 1-hour rows this entry should span (+ 1 extra row below end time) */
export function getRowspan(entry) {
  if (!entry || !entry.timeIn || !entry.timeOut) return 1
  const diff = parseTime(entry.timeOut) - parseTime(entry.timeIn)
  return Math.max(1, Math.ceil(diff / 60)) + 1
}
