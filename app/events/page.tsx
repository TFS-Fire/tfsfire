'use client'

import { useState } from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths, getDay, startOfDay, isAfter, isBefore } from 'date-fns'
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalendarIcon, Download } from 'lucide-react'

interface Event {
  id: number
  title: string
  date: Date
  time: string
  location: string
  description: string
  downloadLink?: string
}

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  // Placeholder events - replace with API or CMS
  // Using startOfDay to normalize dates and ensure proper comparison
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  
  // Create events for the current month and next month
  // Ensuring at least some events are in the future
  const events: Event[] = [
    {
      id: 1,
      title: 'Fire Academy',
      date: startOfDay(new Date(2026, 2, 13)),
      time: '6:00 PM - 10:00 PM',
      location: 'Marion Fire Department',
      description: 'Fire academy training for volunteers covering core firefighting skills, safety, and equipment operation.',
    },
    {
      id: 2,
      title: 'Fire Academy',
      date: startOfDay(new Date(2026, 2, 14)),
      time: '8:00 AM - 5:00 PM',
      location: 'Bigfork Fire Department',
      description: 'Fire academy training for volunteers covering core firefighting skills, safety, and equipment operation.',
    },
    {
      id: 3,
      title: 'Training Meeting',
      date: startOfDay(new Date(2026, 2, 16)),
      time: '7:00 PM - 9:00 PM',
      location: 'Station 1',
      description: 'Weekly training session for active volunteers covering firefighting techniques and equipment operation.',
    },
    {
      id: 4,
      title: 'Training Meeting',
      date: startOfDay(new Date(2026, 2, 23)),
      time: '7:00 PM - 9:00 PM',
      location: 'Station 1',
      description: 'Weekly training session for active volunteers covering firefighting techniques and equipment operation.',
    },
    {
      id: 5,
      title: 'Board Meeting',
      date: startOfDay(new Date(2026, 2, 25)),
      time: '7:00 PM - 9:00 PM',
      location: 'Station 1',
      description: 'Board meeting for the TFS Volunteer Fire Department.',
    },
    {
      id: 6,
      title: 'Training Meeting',
      date: startOfDay(new Date(2026, 2, 30)),
      time: '7:00 PM - 9:00 PM',
      location: 'Station 1',
      description: 'Weekly training session for active volunteers covering firefighting techniques and equipment operation.',
    },
  ]

  const getEventsForDate = (date: Date): Event[] => {
    const normalizedDate = startOfDay(date)
    return events.filter((event) => {
      const normalizedEventDate = startOfDay(event.date)
      return isSameDay(normalizedEventDate, normalizedDate)
    })
  }

  const getEventsForMonth = (date: Date): Date[] => {
    return events
      .filter((event) => isSameMonth(event.date, date))
      .map((event) => event.date)
  }

  const selectedEvents = getEventsForDate(selectedDate)
  const monthEvents = getEventsForMonth(currentDate)

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })

  const days: Date[] = []
  let day = calendarStart
  while (day <= calendarEnd) {
    days.push(day)
    day = addDays(day, 1)
  }

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  const upcomingEvents = events
    .filter((event) => {
      const todayStart = startOfDay(new Date())
      const eventDateStart = startOfDay(event.date)
      // Include today's events and future events
      return !isBefore(eventDateStart, todayStart)
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">Events Calendar</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Upcoming community events, training sessions, and public programs
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="section-padding bg-fire-dark/95">
        <div className="container-custom">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendar Container - Desktop View */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
                  {/* Calendar Header */}
                  <div className="bg-white border-b border-gray-300 px-6 py-5 flex items-center justify-between">
                    <button
                      onClick={previousMonth}
                      className="p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" aria-hidden="true" />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-fire-red">
                      {format(currentDate, 'MMMM yyyy')}
                    </h2>
                    <button
                      onClick={nextMonth}
                      className="p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                    {weekdays.map((day) => (
                      <div
                        key={day}
                        className="px-3 py-3 text-center text-sm font-bold text-gray-600 uppercase tracking-wide border-r border-gray-200 last:border-r-0"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 border-t border-l border-gray-200">
                    {days.map((day, index) => {
                      const dayEvents = getEventsForDate(day)
                      const isCurrentMonth = isSameMonth(day, currentDate)
                      const isSelected = isSameDay(day, selectedDate)
                      const isToday = isSameDay(day, new Date())
                      const hasEvents = dayEvents.length > 0

                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedDate(day)
                            setCurrentDate(day)
                          }}
                          className={`
                            relative min-h-[100px] md:min-h-[120px] p-2 md:p-3
                            text-left transition-colors duration-150
                            border-r border-b border-gray-200
                            focus:outline-none focus:ring-2 focus:ring-fire-red focus:z-10
                            ${!isCurrentMonth ? 'text-gray-400 bg-gray-50/50' : 'text-gray-900 bg-white'}
                            ${isSelected ? '!bg-fire-red !text-white z-10' : ''}
                            ${isToday && !isSelected ? 'bg-blue-50 ring-2 ring-blue-400 ring-inset' : ''}
                            ${!isSelected && isCurrentMonth ? 'hover:bg-gray-50' : ''}
                            ${isSelected ? 'hover:!bg-fire-red/90' : ''}
                          `}
                          aria-label={`${format(day, 'MMMM d, yyyy')}${hasEvents ? `, ${dayEvents.length} event${dayEvents.length > 1 ? 's' : ''}` : ''}`}
                        >
                          <div className={`
                            text-sm md:text-base font-semibold mb-1
                            ${isSelected ? 'text-white' : isToday && !isSelected ? 'text-blue-600' : ''}
                          `}>
                            {format(day, 'd')}
                          </div>
                          {hasEvents && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {dayEvents.slice(0, 2).map((event) => (
                                <span
                                  key={event.id}
                                  className={`
                                    inline-block w-2 h-2 rounded-full
                                    ${isSelected ? 'bg-white/80' : 'bg-fire-red'}
                                  `}
                                  aria-hidden="true"
                                />
                              ))}
                              {dayEvents.length > 2 && (
                                <span
                                  className={`
                                    text-xs font-medium
                                    ${isSelected ? 'text-white/90' : 'text-fire-red'}
                                  `}
                                  aria-hidden="true"
                                >
                                  +{dayEvents.length - 2}
                                </span>
                              )}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Calendar */}
              <div className="lg:hidden mb-8">
                <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
                  {/* Mobile Calendar Header */}
                  <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
                    <button
                      onClick={previousMonth}
                      className="p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" aria-hidden="true" />
                    </button>
                    <h2 className="text-xl font-bold text-fire-red">
                      {format(currentDate, 'MMMM yyyy')}
                    </h2>
                    <button
                      onClick={nextMonth}
                      className="p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Mobile Calendar Grid */}
                  <div className="p-2">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {weekdays.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-bold text-gray-600 uppercase py-2"
                        >
                          {day.charAt(0)}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, index) => {
                        const dayEvents = getEventsForDate(day)
                        const isCurrentMonth = isSameMonth(day, currentDate)
                        const isSelected = isSameDay(day, selectedDate)
                        const isToday = isSameDay(day, new Date())
                        const hasEvents = dayEvents.length > 0

                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedDate(day)
                              setCurrentDate(day)
                            }}
                            className={`
                              aspect-square min-h-[44px] rounded-lg
                              text-sm font-semibold transition-colors duration-150
                              focus:outline-none focus:ring-2 focus:ring-fire-red focus:z-10
                              ${!isCurrentMonth ? 'text-gray-400 bg-gray-50/50' : 'text-gray-900 bg-white'}
                              ${isSelected ? 'bg-fire-red text-white' : ''}
                              ${isToday && !isSelected ? 'bg-blue-50 ring-2 ring-blue-400' : ''}
                              ${!isSelected && isCurrentMonth ? 'hover:bg-gray-100' : ''}
                              ${hasEvents ? 'relative' : ''}
                            `}
                            aria-label={`${format(day, 'MMMM d, yyyy')}${hasEvents ? `, ${dayEvents.length} event${dayEvents.length > 1 ? 's' : ''}` : ''}`}
                          >
                            {format(day, 'd')}
                            {hasEvents && (
                              <span
                                className={`
                                  absolute bottom-1 left-1/2 transform -translate-x-1/2
                                  w-1.5 h-1.5 rounded-full
                                  ${isSelected ? 'bg-white' : 'bg-fire-red'}
                                `}
                                aria-hidden="true"
                              />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Selected Date Events Panel */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-24">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    {format(selectedDate, 'MMMM d, yyyy')}
                  </h2>
                  {selectedEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedEvents.map((event) => (
                        <div
                          key={event.id}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-shadow"
                        >
                          <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
                            {event.title}
                          </h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex items-start">
                              <Clock className="w-4 h-4 mr-2 mt-0.5 text-fire-red flex-shrink-0" aria-hidden="true" />
                              <span className="font-medium">{event.time}</span>
                            </div>
                            <div className="flex items-start">
                              <MapPin className="w-4 h-4 mr-2 mt-0.5 text-fire-red flex-shrink-0" aria-hidden="true" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          {event.description && (
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{event.description}</p>
                          )}
                          {event.downloadLink && (
                            <a
                              href={event.downloadLink}
                              download
                              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-fire-red text-white text-sm font-semibold rounded-lg hover:bg-fire-red/90 transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2"
                            >
                              <Download className="w-4 h-4" aria-hidden="true" />
                              Download Files
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 text-lg">No events scheduled</p>
                      <p className="text-gray-500 text-sm mt-2">for this date.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Events List View */}
      <section className="lg:hidden section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-2xl font-bold text-fire-red">
                      {format(event.date, 'd')}
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase mt-1">
                      {format(event.date, 'MMM')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-fire-red flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5 text-fire-red flex-shrink-0" aria-hidden="true" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {event.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                    {event.description}
                  </p>
                )}
                {event.downloadLink && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href={event.downloadLink}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-fire-red text-white text-sm font-semibold rounded-lg hover:bg-fire-red/90 transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Download Files
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Upcoming Events List */}
      <section className="hidden lg:block section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-20 text-center bg-fire-red/5 rounded-lg p-3">
                      <div className="text-3xl font-bold text-fire-red">
                        {format(event.date, 'd')}
                      </div>
                      <div className="text-sm font-semibold text-gray-700 uppercase mt-1">
                        {format(event.date, 'MMM yyyy')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-fire-red flex-shrink-0" aria-hidden="true" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 text-fire-red flex-shrink-0" aria-hidden="true" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {event.description && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                      {event.description}
                    </p>
                  )}
                  {event.downloadLink && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={event.downloadLink}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-fire-red text-white text-sm font-semibold rounded-lg hover:bg-fire-red/90 transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2"
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Download Files
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
