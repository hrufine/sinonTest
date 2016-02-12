var sinon = require('sinon');
var express = require('express');
var chai = require('chai');
var expect = require('chai').expect;
var superTest = require('supertest');
var app = require("../bin/www");

var url = superTest("http://localhost:8080");
var logSchema = require('../models/dbConfig.js').aptLogModel;





describe("Testing Datarate  Route --",function(err){
   this.timeout(20000);
  it("should return monthwise data rate for spacified year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_all")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){
        var myObj = JSON.parse(res.text);
        expect(myObj[1]["Input"]).to.equal(31841926);

        done();
      })
  })

//****************************************************************
//*******************dataRate metadata*****************************

  it("should return monthwise data rate(metadata) for spacified year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_metadata")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){
        var myObj = JSON.parse(res.text);
        expect(myObj[1]["Output"]).to.equal(181631725);

        done();
      })
  })

//****************************************************************************
//*******************dataRate packages*****************************

  it("should return monthwise data rate (packagewise) spacified year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_package")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){
        var myObj = JSON.parse(res.text);
        expect(myObj[1]["Input"]).to.equal(547443);

        done();
      })
  })

//****************************************************************************
//*******************dataRate packages*****************************

  it("should return day wise data rate for selected month and year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_Feb_all")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){
        var myObj = JSON.parse(res.text);
        expect(myObj[10]["Output"]).to.equal(182037894);

        done();
      })
  })

//****************************************************************************
//*******************dataRate packages*****************************

  // it("should return day wise data rate(metadata) for selected month and year with json datatype",function(done){
  //   url
  //     .get("/dataRateData/size/2016_Feb_metadata")
  //     .expect(200)
  //     .expect("Content type",/json/)
  //     .end(function(err, res){
  //
  //       var myObj = JSON.parse(res.text);
  //       expect(myObj[29]["Input"]).to.equal(31294483);
  //
  //       done();
  //     })
  // })

//****************************************************************************
//*******************dataRate packages*****************************

  it("should return day wise data rate(metadata) for selected month and year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_Feb_package")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){

        var myObj = JSON.parse(res.text);
        expect(myObj[10]["Output"]).to.equal(406169);
        done();
      })
  })
})
// *************************************************************************************************
// ****************************************************************************
// *******************Package repository route*****************************
describe("Testing package repository route -- ",function(err){
   this.timeout(20000);

      it("should return yearwise package details in table formate for the selected year",function(done){
        url
            .get("/repository/mode/2016/Input")
            .expect(200)
            .expect("Content type",/json/)
            .end(function(err, res){
              var myObj = JSON.parse(res.text);
              expect(myObj[0]["packageName"]).to.equal("aglfn");
              done();
            })
          })

          it("should return yearwise package details in table formate for the selected year",function(done){
            url
                .get("/repository/mode/2016/Output")
                .expect(200)
                .expect("Content type",/json/)
                .end(function(err, res){
                  var myObj = JSON.parse(res.text);
                  expect(myObj[0]["repository"]).to.equal("uburep");
                  done();
                })

})
})
// //*************************LogRate data and PackageAnalytics route *************************************
// describe("Testing LogRateData Routes Yearwise",function(err){
//    this.timeout(200000);
//   it("should return LogRate all data for the year 2015 with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_all")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[10]["period"]).to.equal("Nov");
//         expect(myObj[10]["Input"]).to.equal(3202);
//         expect(myObj[10]["Output"]).to.equal(5594);
//         done();
//       })
//   })
//   it("should return LogRate metadata for the year 2015 with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_metadata")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[11]["period"]).to.equal("Dec");
//         expect(myObj[11]["Input"]).to.equal(4821);
//         expect(myObj[11]["Output"]).to.equal(11549);
//         done();
//       })
//   })
//   it("should return LogRate packages data for the year 2015 with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_package")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//
//         var myObj = JSON.parse(res.text);
//
//         expect(myObj[9]["period"]).to.equal("Oct");
//         expect(myObj[9]["Input"]).to.equal(113);
//         expect(myObj[9]["Output"]).to.equal(2041);
//
//         done();
//       })
//   })
// })
// describe("Testing LogRateData Routes Monthwise",function(err){
//      this.timeout(20000);
//   it("should return LogRate all data for the year 2015 month October with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_Oct_all")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//
//         var myObj = JSON.parse(res.text);
//         expect(myObj[26]["period"]).to.equal(27);
//         expect(myObj[26]["Input"]).to.equal(448);
//         expect(myObj[26]["Output"]).to.equal(1348);
//
//         done();
//       })
//   })
//   it("should return LogRate metadata for the year 2015 month October with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_Oct_metadata")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[30]["period"]).to.equal(31);
//         expect(myObj[30]["Input"]).to.equal(237);
//         expect(myObj[30]["Output"]).to.equal(408);
//         done();
//       })
//   })
//   it("should return LogRate packages data for the year 2015 month October with Json datatype",function(done){
//     url
//       .get("/logRateData/rate/2015_Oct_package")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[25]["period"]).to.equal(26);
//         expect(myObj[25]["Input"]).to.equal(13);
//         expect(myObj[25]["Output"]).to.equal(15);
//         done();
//       })
//   })
// })
//
// describe("Testing PackageAnalytics Routes Yearwise",function(err){
//    this.timeout(20000);
//   it("should return PackageAnalytics data for the year 2015 with Json datatype",function(done){
//     url
//       .get("/packageanalytics/package/package_bz2_info/2015")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[1]["package"]).to.equal("uburep");
//         expect(myObj[1]["os"]).to.equal("trusty");
//         expect(myObj[1]["count"]).to.equal(26728);
//         done();
//       })
//   })
// })
//
// describe("Testing PackageAnalytics Routes Monthwise",function(err){
//    this.timeout(20000);
//   it("should return PackageAnalytics data for the year 2015 Month November with Json datatype",function(done){
//     url
//       .get("/packageanalytics/package/package_bz2_info/2015_Nov")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[0]["package"]).to.equal("security.ubuntu.com");
//         expect(myObj[0]["os"]).to.equal("universe");
//         expect(myObj[0]["count"]).to.equal(7);
//         done();
//       })
//   })
// })
// //**************************packagecount route***************************************************
// describe("Testing packageCount route Yearwise",function(err){
//   it("should return Package count data yearwise with json datatype",function(done){
//     url
//       .get("/packagecount/year/year_month/2015")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//         var myObj = JSON.parse(res.text);
//         expect(myObj[0]["Package Version"]).to.equal("1.2.50-1ubuntu2.14.04.1");
//         done();
//       })
//   })
//
//   it("should return Package count data monthwise with json datatype",function(done){
//     url
//       .get("/packagecount/year/year_month/2015_Oct")
//       .expect(200)
//       .expect("Content type",/json/)
//       .end(function(err, res){
//           var myObj = JSON.parse(res.text);
//           expect(myObj[0]["Package Version"]).to.equal("1.9.1-1ubuntu0.1");
//           done();
//       })
//   })
// })
//
//
//
describe("testing packageCount route",function(err){
 this.timeout(20000);
  before(function(){

    var mStub_aggregate = sinon.stub(logSchema, 'aggregate');
    var mStub_find = sinon.stub(logSchema, 'find');

    var argvalue_datarate_all = {timestamp:{'$gte': 1451606400, '$lte': 1483228799 }};//2016 feb month
    var yieldvalue_datarate_all = [{"_id" : "56bc2b018634926707000001", "timestamp" : "1455172317", "mode" : "I", "size" : 99999, "host" : "172.23.238.253", "path" : "security.debian.org/stubtest", "time" : "2016-02-11T06:32:08Z"}];


    var argvalue_datarate_package = {path:/.deb/,timestamp:{'$gte':1451606400,'$lte':1483228799 }};//2016 feb month package
    var yieldvalue_datarate_package = [{"_id" : "56bc2b018634926707000001", "timestamp" : "1455172317", "mode" : "O", "size" : 12345, "host" : "172.23.238.253", "path" : "security.debian.org/dists/jessie/updates/InRelease", "time" : "2016-02-11T06:32:08Z"}];


    var argvalue_package_repo_table = [{$match :{timestamp:{$gte:"1451606400" ,$lte:"1483228799"},
                                  path:{$regex:".deb$"},mode:"I"}},
                                  {$group:{_id:{filename:"$path"}}}];
    var yieldValue_package_repo_table = [{ "_id" : { "filename" : "uburep/pool/universe/a/aglfn/stubtest_stubtest.deb" } }];

    var argvalue_package_count=[{$match:{timestamp:{'$gte':'1451606400','$lte':'1483228799'},mode:'O',path:{'$regex':'.deb$'}}},{$group:{_id:{package:"$path"},count:{$sum:1}}}]
    var yieldValue_package_count=[{ "_id" : { "package" : "uburep/pool/universe/a/aglfn/stubtest_0.0.0_test.deb" }, "count" : 1 }];


    mStub_find.withArgs(argvalue_datarate_all).yields(null,yieldvalue_datarate_all);
    mStub_find.withArgs(argvalue_datarate_package).yields(null,yieldvalue_datarate_package);
    mStub_aggregate.withArgs(argvalue_package_repo_table).yields(null,yieldValue_package_repo_table);
    mStub_aggregate.withArgs(argvalue_package_count).yields(null,yieldValue_package_count);
    // mStub.yields(null,yieldValue);

  });

  it('should retrieve data', function(done){
    url
       .get("/packageCount/year/year_month/2016")
       .expect(200)
       .end(function(err, res){
         var myObj = JSON.parse(res.text);
        expect(myObj[0]["Package Name"]).to.equal("stubtest");
          done();
       })
  });

  it("should return monthwise data rate for spacified year with json datatype",function(done){
    url
      .get("/dataRateData/size/2016_all")
      .expect(200)
      .expect("Content type",/json/)
      .end(function(err, res){
       var myObj = JSON.parse(res.text);
      expect(myObj[01]["Input"]).to.equal(099999);
        done();
      })
  })
    it("should return monthwise data rate (packagewise) spacified year with json datatype",function(done){
      url
        .get("/dataRateData/size/2016_package")
        .expect(200)
        .expect("Content type",/json/)
        .end(function(err, res){
          var myObj = JSON.parse(res.text);
          expect(myObj[01]["Output"]).to.equal(12345);
          done();
        })
    })
    //**********package by repo repo***************
    it("should return packagedetails by repo,pool etc for specified year and type(Input/Output)",function(done){
      url
        .get("/repository/mode/2016/Input")
        .expect(200)
        .expect("Content type",/json/)
        .end(function(err, res){
         var myObj = JSON.parse(res.text);
         expect(myObj[0]["packageName"]).to.equal('stubtest');
          done();
        })
    })

})
