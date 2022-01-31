package org.graphqlncs.resolver

import graphql.kickstart.tools.GraphQLQueryResolver
import org.graphqlncs.Exep
import org.graphqlncs.type.*
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component

@Component
open class QueryResolver(
        private val triangleClassification: TriangleClassification,
        private val expint: Expint,
        private val fisher: Fisher,
        private val gammq: Gammq,
        private val remainder: Remainder,
        private val bessj: Bessj
) : GraphQLQueryResolver {


    fun triangleClassification(a: Int, b: Int, c: Int): Int {
        return triangleClassification.classify(a, b, c)
    }

    fun expint(n: Int, x: Double ): Double {
        return expint.exe(n, x)
    }

    fun fisher(m: Int, n: Int, x:Double  ): Double {
        return fisher.exe(m, n, x)
    }

    fun gammq(a: Double, x:Double  ): Double {
        return gammq.exe(a, x)
    }

    fun remainder(a: Int, b:Int  ): Int {
        val lim = 10000
        return if (a > lim || a < -lim || b > lim || b < -lim) {
            throw Exep("400")
        } else remainder.exe(a, b)
    }

    fun bessj(n:Int, x:Double  ): Double {

        return if (n <= 2 || n > 1000) {
            throw Exep("400")

        } else
            bessj.bessj(n, x)
    }
}