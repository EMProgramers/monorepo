const slugger=require('./index')
const marker=require('@ajar/marker')

const args=['aaa','bbb','ccc']
marker.blue(...args)

marker.magenta(slugger.slugger(...args))
