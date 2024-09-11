import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
  OnDestroy,
  OnChanges,
} from '@angular/core'

interface TableOptions {
  paginationLimit?: number;
  showPagination?: boolean;
}

@Component({
  selector: 'lib-simple-table',
  templateUrl: 'simple-table.component.html',
  styleUrls: ['simple-table.component.scss'],
})
export class SimpleTableComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('headerTable') firstTable!: ElementRef
  @ViewChild('bodyTable') secondTable!: ElementRef
  @ViewChild('footerSection') footerRef!: ElementRef
  @Output() paginateHandler = new EventEmitter()
  @Output() onScroll = new EventEmitter()
  @Input() totalPages!: number
  @Input() tableHeight!: string
  @Input() maxTableHeight!: string
  @Input() tableOptions!: TableOptions
  @Input() showPagination = false
  @Input() buttonPanel = false
  @Input() showXScroll = false
  @Input() tableData: object[] = []
  @Input() showPaginationPanel = true
  // @ViewChild('bodyTable') tableContainer: ElementRef;
  @ViewChild('loaderImage') loaderImage!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('tableLib') tableLib!: ElementRef
  @Input() showLoader = false
  loaderImageName = ''

  thInputKeyupListener = () => {
    return
  }
  tdClickListener = () => {
    return
  }

  pageList = [
    {
      name: '15', id: 1 
    },
    { 
      name: '30', id: 2 
    },
    { 
      name: '50', id: 3 

    },
    { 
      name: '100', id: 4 
    },
  ]

  selectedPage = this.pageList[1]

  paginationState = {
    currentPage: 1,
    limit: 20,
    jumpToFirst: false,
    jumpToLast: false,
  }

  constructor(private renderer: Renderer2) { }

  calculateBackDropDimentions() {
    let sourceHeight = this.tableLib.nativeElement.offsetHeight
    const sourceWidth = this.tableLib.nativeElement.offsetWidth
    if (this.showPagination) {
      sourceHeight = sourceHeight + 50
    }
    if (this.showLoader) {
      this.renderer.setStyle(
        this.loaderImage.nativeElement,
        'height',
        `${sourceHeight}px`
      )
      this.renderer.setStyle(
        this.loaderImage.nativeElement,
        'width',
        `${sourceWidth}px`
      )
      this.renderer.setStyle(
        this.overlay.nativeElement,
        'width',
        `${sourceWidth}px`
      )
      this.renderer.setStyle(
        this.overlay.nativeElement,
        'height',
        `${sourceHeight}px`
      )
    }
  }

  ngAfterViewInit() {

    const bodyElement = document.querySelector('.ang-pharmacy-wrapper')

    switch (bodyElement?.getAttribute('data-theme')) {
    case 'user':
      this.loaderImageName = 'blue-loader.gif'
      break
    case 'admin':
      this.loaderImageName = 'orange-loader.gif'
      break
    case 'green':
      this.loaderImageName = 'green-loader.gif'
      break
    }
    //bodyElement.getAttribute('data-theme')
    this.calculateBackDropDimentions()

    this.elementObserver()
    this.thInputKeyupListener = this.renderer.listen(
      this.firstTable.nativeElement,
      'keyup',
      () => {
        this.resizeColumns()
      }
    )

    this.tdClickListener = this.renderer.listen(
      this.secondTable.nativeElement,
      'click',
      (e) => {
        if (
          e.target.classList.contains('icons-tickmark') ||
          e.target.closest('.icons-tickmark') != null
        ) {
          this.resizeColumns()
        }
      }
    )
  }

  // Detecting Scroll

  detectScroll(event: Event) {
    this.onScroll.emit(event)
    this.resizeColumns()
  }

  // Pagination Code

  jumpTo(location: number) {
    if (location === 0) {
      this.paginationState.currentPage = this.totalPages
    } else if (location === 1) {
      this.paginationState.currentPage = 1
    }
    this.paginate('')
  }
  paginate(dir: string) {
    switch (dir) {
    case 'next':
      if (this.paginationState.currentPage !== this.totalPages) {
        this.paginationState.currentPage++
      }
      break
    case 'prev':
      if (this.paginationState.currentPage !== 1) {
        this.paginationState.currentPage--
      }
      break
    }
    this.paginateHandler.emit(this.paginationState)
  }

  updatePage(e: Event) {
    this.paginationState.currentPage = parseInt(
      (e.target as HTMLInputElement).value
    )
    this.paginateHandler.emit(this.paginationState)
    this.resizeColumns()
  }

  updateRowCount(e: {
    originalEvent: Event;
    value: { name: string; id: number };
  }) {
    this.paginationState.limit = parseInt(e.value.name)
    this.paginateHandler.emit(this.paginationState)
    this.resizeColumns()
  }
  resizeColumns() {
    const firstTable = this.firstTable.nativeElement
    const secondTable = this.secondTable.nativeElement
    const allRows = secondTable.querySelectorAll('tr')

    /**  Handling the width of last column in tbody in case when scroll is visible hidden
     *   We subtract the width of scrollbar i.e 8px from last column when scroll is visible
     *   We reset the width of last column by taking the width of last column in thead
     * */
    if (secondTable.scrollHeight > secondTable.offsetHeight) {
      allRows.forEach((element: HTMLElement) => {
        const lastTd = element.querySelector('td:last-child')
        const tdWidth = firstTable.querySelector(
          'tr:first-child th:last-child'
        ).offsetWidth
        if ((lastTd as HTMLElement).offsetWidth == tdWidth) {
          this.renderer.setStyle(lastTd, 'width', tdWidth - 8 + 'px')
        }
      })
    } else {
      allRows.forEach((element: HTMLElement) => {
        const lastTd = element.querySelector('td:last-child')
        const tdWidth = firstTable.querySelector(
          'tr:first-child th:last-child'
        ).offsetWidth
        if ((lastTd as HTMLElement).offsetWidth < tdWidth) {
          this.renderer.setStyle(lastTd, 'width', tdWidth + 'px')
        }
      })
    }

    /** If we set showXScroll in table config to show horizontal scroll
     * this handles width of tbody to occupy 100%
     * */

    if (this.showXScroll) {
      if (secondTable.scrollWidth > secondTable.offsetWidth) {
        this.renderer.setStyle(secondTable, 'overflow', 'unset')
        this.renderer.setStyle(
          this.secondTable.nativeElement.closest('.table'),
          'width',
          this.secondTable.nativeElement.closest('lib-simple-table')
            .offsetWidth + 'px'
        )
      } else {
        this.renderer.setStyle(secondTable, 'overflow', 'hidden auto')
      }
    }
  }

  /**
   * this will bind resize observer to the target element in our case table for
   * height, width change etc
   */
  elementObserver() {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect
        if (cr.width != 0) {
          this.resizeColumns()
        }
      }
    })

    // Element for which to observe height and width
    ro.observe(this.secondTable.nativeElement)
  }

  ngOnDestroy() {
    this.thInputKeyupListener()
    this.tdClickListener()
  }

  ngOnChanges(changes: SimpleChanges) {
    // eslint-disable-next-line no-prototype-builtins
    if (changes.hasOwnProperty('tableData')) {
      setTimeout(() => {
        this.resizeColumns()
      }, 1)
    }
  }
}
