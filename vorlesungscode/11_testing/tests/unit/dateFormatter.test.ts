import { it, expect } from 'vitest'
import {formatDate} from "@/utils/dateFormatter";

it('formats date correctly', () => {
    const result = formatDate(new Date('2025-06-17'))
    expect(result).toBe('2025-06-17')
})
