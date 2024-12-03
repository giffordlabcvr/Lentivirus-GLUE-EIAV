
//Do genotype and lineage assignment for all ncbi nuccore sequences
var sourceName ='ncbi-nuccore-equine';
var ncbinuccore;
var whereClause = "source.name = '"+sourceName+"' and genotype = null";
ncbinuccore = glue.tableToObjects(glue.command(["list", "sequence", "sequenceID", "-w", whereClause]));
//glue.log("INFO", "RESULT WAS ", ncbinuccore);
var processed = 0;

_.each(ncbinuccore, function(ncbinuccore) {

	var sequenceID = ncbinuccore.sequenceID;
	//glue.log("INFO", "ID RESULT WAS ", sequenceID);	
	var sequenceWhereClause = "sequenceID = '" + sequenceID + "'";
	var genotypeRow;

	var genotypeResults;
	glue.inMode("/module/eiavMaxLikelihoodGenotyper", function() {
		genotypeResults = glue.command(["genotype", "sequence", "-w", sequenceWhereClause]);
		//glue.log("INFO", "Genotype 1 RESULT WAS ", genotypeResults);			
	});
	var genotypeRows = genotypeResults.genotypeCommandResult.row;
	genotypeRow = genotypeRows[0].value;

	var genotypeResult = genotypeRow[1]

	if (genotypeResult) {

		var genotype = genotypeResult.replace("AL_TREE_EIAV_", "");			
		//glue.log("INFO", "Genotype result: ", genotype);
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "genotype", genotype]);
		});
	}

	processed++;

	if(processed % 10 == 0) {
		glue.logInfo("Genotyped "+processed+" sequences. ");
		glue.command(["commit"]);
		glue.command(["new-context"]);
	}

});	


